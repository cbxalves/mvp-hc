import { connect } from 'react-redux'

import { toggleFavorite } from './ducks'
import Home from './Home'

const mapStateToProps = ({ home }) => ({
  favorites: home.favorites,
})

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (...args) => dispatch(toggleFavorite(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
