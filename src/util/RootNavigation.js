// RootNavigation.js

import * as React from 'react'
import { StackActions } from '@react-navigation/native'

export const isMountedRef = React.createRef()

export const navigationRef = React.createRef()

export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params)
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    // Verify if we can navigate back
    navigationRef.current.canGoBack()
      ? navigationRef.current.goBack()
      : navigationRef.current.navigate('Root')
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.replace(name, params))
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function popToTop() {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.popToTop())
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function getRootState() {
  if (isMountedRef.current && navigationRef.current) {
    return navigationRef.current?.getRootState()
  }
}
