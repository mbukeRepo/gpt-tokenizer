/* eslint-disable import/extensions */
import encoder from '../encodings/p50k_base.js'
import { GptEncoding } from '../GptEncoding.js'

export * from '../specialTokens.js'

const api = GptEncoding.getEncodingApi('p50k_edit', () => encoder)
const {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeGenerator,
  isWithinTokenLimit,
} = api
export {
  decode,
  decodeAsyncGenerator,
  decodeGenerator,
  encode,
  encodeGenerator,
  isWithinTokenLimit,
}
// eslint-disable-next-line import/no-default-export
export default api
