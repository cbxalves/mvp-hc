import { useSelector } from 'react-redux'

const useIsHidden = titleId => {
  const hidden = useSelector(state => state.favorites.hidden)

  return hidden.includes(titleId)
}

export default useIsHidden
