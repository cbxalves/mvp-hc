/*
 * Combine all sagas in the this file
 * and export them.
 */

import details from 'containers/TitleDetails/sagas'
import search from 'containers/Search/sagas'

const sagas = [details, search]

export default sagas
