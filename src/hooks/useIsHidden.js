import { useSelector } from 'react-redux'

const useIsHidden = titleId => {
  const hidden = useSelector(state => state.search.hidden)

  return !!hidden.find(h => h.imdbID === titleId)
}

export default useIsHidden
