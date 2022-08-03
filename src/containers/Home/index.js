import { connect } from 'react-redux'

import { toggleVisibility } from 'containers/Search/ducks'
import { toggleFavorite } from './ducks'
import Home from './Home'

const mapStateToProps = ({ home }) => ({
  favorites: home.favorites,
})

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (...args) => dispatch(toggleFavorite(...args)),
  toggleVisibility: (...args) => dispatch(toggleVisibility(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
