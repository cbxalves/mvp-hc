import { connect } from 'react-redux'

import {
  getTitleDetails,
  toggleFavorite,
  toggleVisibility,
} from 'containers/Favorites/ducks'
import Creation from './TitleDetails'

const mapStateToProps = ({ favorites }) => ({
  details: favorites.details,
  isLoading: favorites.isLoading,
})

const mapDispatchToProps = dispatch => ({
  getTitleDetails: (...args) => dispatch(getTitleDetails(...args)),
  toggleFavorite: (...args) => dispatch(toggleFavorite(...args)),
  toggleVisibility: (...args) => dispatch(toggleVisibility(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Creation)
