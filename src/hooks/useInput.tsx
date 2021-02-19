import { useState, ChangeEvent, Dispatch } from 'react'

const useInput = (
  initialValue = ''
): [
  string,
  Dispatch<React.SetStateAction<string>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const reset = () => setValue('')

  return [value, setValue, onChange, reset]
}

export default useInput
