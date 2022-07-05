import { connect } from 'react-redux'

import { incrementVisits } from './ducks'
import Creation from './Creation'

const mapStateToProps = ({ creation }) => ({
  ...creation,
})

const mapDispatchToProps = dispatch => ({
  incrementVisits: (...args) => dispatch(incrementVisits(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Creation)
