import { connect } from 'react-redux'

import { toggleVisibility } from 'containers/Search/ducks'
import { toggleFavorite } from './ducks'
import Home from './Home'

const mapStateToProps = ({ home, search }) => ({
  favorites: home.favorites,
  hidden: search.hidden,
})

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (...args) => dispatch(toggleFavorite(...args)),
  toggleVisibility: (...args) => dispatch(toggleVisibility(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
