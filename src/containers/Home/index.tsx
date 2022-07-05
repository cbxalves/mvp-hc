import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { fetchCreations } from './ducks'
import Home from './Home'

const mapStateToProps = ({ home }) => ({
  ...home,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCreations: (...args) => dispatch(fetchCreations(...args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
