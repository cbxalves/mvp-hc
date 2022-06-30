import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Appbar, Badge, withTheme, Text } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import WefoodLogo from 'assets/images/wefood-logo-white.png'
import Dialog from 'components/Dialog'
import { useAccessibilityContext } from 'contexts/Accessibility'
import { useLocalizationContext } from 'contexts/Localization'
import { colors } from 'styles'
import { isCorporate, isQuality } from 'util/envConfig'
import normalize from 'util/normalize'

import getStyles from './styles'

function AppBar({
  type,
  title,
  titleColor,
  transparent,
  iconColor,
  customBack,
  disableBack,
  theme,
  showCart,
  cartOrder,
  deliveryOrder,
  deliveryTrack,
  onCartClick,
  isLoggedIn,
  showTrack,
  resetEnabled,
  resetRestaurant,
  nestedRoute,

  selectedDay,
}) {
  const styles = getStyles(theme)
  const { t } = useLocalizationContext()
  const { signLanguage } = useAccessibilityContext()
  const navigation = useNavigation()
  const [dialogOpen, setDialogOpen] = useState(false)
  const isDelivery = !!onCartClick
  const cartBtnVisible = showCart && isLoggedIn
  const order = isDelivery ? deliveryOrder.items : cartOrder
  const cartSize = cartBtnVisible
    ? order?.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0

  const goToCart = () => navigation.navigate('Cart')

  const goToProgress = () => navigation.navigate('DeliveryProgress')

  const toggleDialog = () => setDialogOpen(prevDialogOpen => !prevDialogOpen)

  const handleReset = async () => {
    setDialogOpen(false)
    await resetRestaurant()
    navigation.navigate('Root')
  }

  return (
    <>
      <Appbar.Header
        style={[
          styles.header,
          transparent && styles.transparent,
          // isCorporate && type !== 'home' && styles.headerCorp,
        ]}
        statusBarHeight={getStatusBarHeight()}
      >
        <View style={styles.action}>
          {!isCorporate ? (
            <>
              {type === 'back' && !disableBack && (
                <Appbar.BackAction
                  color={iconColor || (transparent ? '#000' : '#fff')}
                  onPress={customBack || navigation.goBack}
                />
              )}
              {type === 'home' && (
                <Appbar.Action
                  icon='menu'
                  color='#fff'
                  onPress={() => navigation.openDrawer()}
                />
              )}
            </>
          ) : (
            <>
              {type === 'home' && (
                <Appbar.Action
                  style={{
                    ...styles.btn,
                    backgroundColor: theme.colors.buttonHeader,
                  }}
                  color={theme.colors.menu}
                  icon='menu'
                  onPress={() => navigation.openDrawer()}
                />
              )}
              {type === 'back' && (
                <Appbar.BackAction
                  style={{
                    ...styles.btn,
                    ...(!isQuality && {
                      backgroundColor: theme.colors.buttonHeader,
                    }),
                  }}
                  color={
                    theme.colors.colorTextHeader === theme.colors.buttonHeader
                      ? isQuality
                        ? theme.colors.colorTextHeader
                        : theme.colors.colorAppBar
                      : theme.colors.colorTextHeader
                  }
                  onPress={customBack || navigation.goBack} //this._goBack
                />
              )}
            </>
          )}
        </View>
        {!transparent && !isCorporate && (
          <View style={styles.middle}>
            <Image
              style={styles.wefoodLogo}
              source={WefoodLogo}
              resizeMode='contain'
            />
          </View>
        )}
        {isCorporate && (
          <View style={styles.titleContainer}>
            {title && (
              <Text
                style={[
                  styles.title,
                  signLanguage && global.libras,
                  { color: transparent ? titleColor : colors.white },
                ]}
              >
                {title && selectedDay
                  ? normalize(title, signLanguage).slice(0, -4)
                  : normalize(title, signLanguage)}
              </Text>
            )}
            {/* {selectedDay && (
              <Text
                style={[
                  styles.title,
                  signLanguage && global.libras,
                  { color: transparent ? titleColor : '#FFF' },
                ]}
              >
                {normalize(selectedDay.label, signLanguage)}
              </Text>
            )} */}
          </View>
        )}

        <View style={styles.action}>
          {isLoggedIn && deliveryTrack && showTrack && (
            <>
              <Appbar.Action
                style={styles.cart}
                icon='bell-ring'
                color='#fff'
                onPress={goToProgress}
              />
              <Badge size={18} style={styles.badge}>
                {'!'}
              </Badge>
            </>
          )}

          {cartBtnVisible &&
            (!isDelivery || (isDelivery && cartSize > 0)) && ( // && !deliveryTrack
              <>
                <Appbar.Action
                  style={styles.cart}
                  icon='cart'
                  color='#fff'
                  onPress={onCartClick || goToCart}
                />
                {cartSize > 0 && (
                  <Badge size={18} style={styles.badge}>
                    {cartSize}
                  </Badge>
                )}
              </>
            )}
        </View>
        {resetEnabled && (
          <View style={styles.resetContainer}>
            <Appbar.Action
              icon='close'
              style={{
                ...styles.resetBtn,
                backgroundColor: theme.colors.buttonHeader,
              }}
              color={theme.colors.close}
              onPress={toggleDialog}
            />
          </View>
        )}
      </Appbar.Header>
      <Dialog
        visible={dialogOpen}
        title={t('home.resetTitle')}
        titleStyle={styles.dialogTitle}
        content={
          <>
            <Text style={[styles.dialogText, signLanguage && global.libras]}>
              {t('home.resetText')}
            </Text>
            <Text style={[styles.dialogText, signLanguage && global.libras]}>
              <Text
                style={[styles.dialogWarning, signLanguage && global.libras]}
              >
                {normalize(t('home.attention'), signLanguage)}:
              </Text>
              {` ${normalize(t('home.resetInfo'), signLanguage)}`}
            </Text>
          </>
        }
        confirmLabel={t('global.remove')}
        confirmButtonColor='red'
        cancelLabel={t('global.cancel')}
        onCancel={toggleDialog}
        onConfirm={handleReset}
      />
    </>
  )
}

AppBar.defaultProps = {
  // type: 'back',
  showTrack: true,
}

export default withTheme(AppBar)
