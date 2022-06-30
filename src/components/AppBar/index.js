import { connect } from 'react-redux'
import { resetRestaurant } from 'containers/Restaurant/ducks'
import AppBar from './AppBar'

const mapStateToProps = ({ auth, cart, delivery }) => ({
  isLoggedIn: !!auth.authToken,
  cartOrder: cart.order,
  deliveryOrder: delivery.order,
  deliveryTrack: delivery.track,
})

const mapDispatchToProps = dispatch => ({
  resetRestaurant: (...args) => dispatch(resetRestaurant(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
