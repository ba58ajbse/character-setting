import React from 'react'
import styled from 'styled-components'

type PropType = {
  id: string
  label: string
  type: string
  isReadOnly: boolean
}

const Input: React.FC<PropType> = ({ id, label, type, isReadOnly }) => {
  return (
    <>
      <LabelDefault htmlFor={id}>{label}</LabelDefault>
      <InputDefault id={id} type={type} readOnly={isReadOnly} />
    </>
  )
}

export default Input

const InputDefault = styled.input<{ readOnly: boolean }>`
  margin-left: 8px;
  border-bottom: 1px solid #494949;
  text-align: center;
`
const LabelDefault = styled.label`
  color: #494949;
`
