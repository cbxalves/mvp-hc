import { useSelector } from 'react-redux'

const useIsFavorited = titleId => {
  const favorites = useSelector(state => state.home.favorites)

  return !!favorites.find(f => f.imdbID === titleId)
}

export default useIsFavorited
