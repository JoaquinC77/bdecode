import clipboardy from 'clipboardy'
import { log } from '@clack/prompts'

export const encodeStringToBase64 = (text = '') => {
  const bufferToEncode = Buffer.from(text, 'utf8')
  const textEncode = bufferToEncode.toString('base64')
  copyToClipboard(textEncode)
  return textEncode
}
export const decodeStringToBase64 = (text = '') => {
  const bufferToDencode = Buffer.from(text, 'base64')
  const textDecode = bufferToDencode.toString('utf-8')
  copyToClipboard(textDecode)
  return textDecode
}

export const copyToClipboard = (textToCopy = '') => {
  try {
    clipboardy.writeSync(textToCopy)
    log.success('Copied in clipboard!')
  } catch (error) {
    log.error('Error to copied in clipboard!');
  }

}