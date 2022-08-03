import { useSelector } from 'react-redux'

const useIsHidden = titleId => {
  const hidden = useSelector(state => state.search.hidden)

  return hidden.includes(titleId)
}

export default useIsHidden
