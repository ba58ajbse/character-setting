import { useState, createContext } from 'react'

type EditContextType = {
  isEdit: boolean
  toggleEdit: () => void
}

const defaultEditContext: EditContextType = {
  isEdit: false,
  toggleEdit: () => {}, // eslint-disable-line  @typescript-eslint/no-empty-function
}

export const EditContext = createContext<EditContextType>(defaultEditContext)

export const useEdit = (): EditContextType => {
  const [isEdit, setIsEdit] = useState(false)

  const toggleEdit = () => setIsEdit(!isEdit)

  return { isEdit, toggleEdit }
}
