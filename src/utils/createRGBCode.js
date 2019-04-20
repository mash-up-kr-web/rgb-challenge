import sampleIntLessThan from './sampleIntLessThan'

const createRGBCode = () => (
  `rgb(${sampleIntLessThan(256)}, ${sampleIntLessThan(256)}, ${sampleIntLessThan(256)})`
)

export default createRGBCode
