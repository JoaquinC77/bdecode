import { intro, outro, select, text } from '@clack/prompts'
import { decodeStringToBase64, encodeStringToBase64 } from './helpers/base64.js'

const execActionByOption = (option, text = '') => {
  const actionsByOption = {
    encode: () => encodeStringToBase64(text),
    decode: () => decodeStringToBase64(text),
    default: () => console.log('Option selected is not valid')
  }

  return actionsByOption[option] ? actionsByOption[option]() : actionsByOption.default()
}

intro('Base64 encode - decode')

const options = [
  { value: 'encode', label: 'Encode'},
  { value: 'decode', label: 'Decode'},
]

const optionSelected = await select({
  message: 'Select a option',
  options
})

const textToEncodeDecode = await text({
  message: `What is the text to ${optionSelected}:`,
  validate(value){
    if (value.length === 0) return `Value is required!`;
  }
})

const base64Text = execActionByOption(optionSelected, textToEncodeDecode)

outro(base64Text)
process.exit(0)