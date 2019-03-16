import getIntLessThan from './getIntLessThan'

const createRGBCode = () =>
  `rgb(${getIntLessThan(256)}, ${getIntLessThan(256)}, ${getIntLessThan(256)})`

export default createRGBCode
