import { connect } from 'react-redux'

import { searchTitle, resetResults } from './ducks'
import Favorites from './Search'

const mapStateToProps = ({ search }) => ({
  results: search.results,
  dataFetched: search.dataFetched,
  isLoading: search.isLoading,
})

const mapDispatchToProps = dispatch => ({
  searchTitle: (...args) => dispatch(searchTitle(...args)),
  resetResults: (...args) => dispatch(resetResults(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
