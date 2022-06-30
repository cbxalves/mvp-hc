/*
 * Default headers for API calls
 */

function getDefaultHeaders({ state, type, token, requestUrl }) {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: 0,
  }

  if (type == null) return headers

  switch (type) {
    case 'we':
      headers.Authorization = `We ${state.auth.authToken}`
      break
    case 'bearer':
      if (token) {
        headers.Authorization = `Bearer ${token}`
      } else if (state && state.auth && state.auth.authToken) {
        headers.Authorization = `Bearer ${state.auth.authToken}`
      }
      break
    default:
      break
  }

  return headers
}

export default getDefaultHeaders
