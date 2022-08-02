import { connect } from 'react-redux'

import { searchTitle } from './ducks'
import Favorites from './Favorites'

const mapStateToProps = ({ favorites }) => ({
  results: favorites.results,
  isLoading: favorites.isLoading,
})

const mapDispatchToProps = dispatch => ({
  searchTitle: (...args) => dispatch(searchTitle(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
