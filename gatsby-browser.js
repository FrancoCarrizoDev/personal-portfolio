import { wrapRootElement as wrap } from './root-wrapper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export function onClientEntry() {
  library.add(faChevronLeft)
}
export const wrapRootElement = wrap
