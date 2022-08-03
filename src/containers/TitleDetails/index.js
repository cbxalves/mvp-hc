import { connect } from 'react-redux'

import { toggleFavorite } from 'containers/Home/ducks'
import { toggleVisibility } from 'containers/Search/ducks'
import { getTitleDetails } from './ducks'
import TitleDetails from './TitleDetails'

const mapStateToProps = ({ details }) => ({
  details: details.data,
  isLoading: details.isLoading,
})

const mapDispatchToProps = dispatch => ({
  getTitleDetails: (...args) => dispatch(getTitleDetails(...args)),
  toggleFavorite: (...args) => dispatch(toggleFavorite(...args)),
  toggleVisibility: (...args) => dispatch(toggleVisibility(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TitleDetails)
