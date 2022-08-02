/*
 * Default headers for API calls
 */

import { API_URL } from '../config/endpoints'

export default function () {
  return {
    Accept: 'application/json',
    'x-host': API_URL,
    'Content-Type': 'application/json',
  }
}
