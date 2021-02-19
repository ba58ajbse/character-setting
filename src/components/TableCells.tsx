import React, { useContext, useEffect } from 'react'
import { TableCell } from '@material-ui/core'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import { EditContext } from '../context/edit'

type PropType = {
  info: {
    name: string
    value: number
    correction: number
  }
}

const TableCells: React.FC<PropType> = ({ info }) => {
  const [value, setValue, onChangeValue] = useInput('')
  const [correction, setCorrection, onChangeCorrection] = useInput('')
  const editState = useContext(EditContext)

  useEffect(() => {
    if (info) {
      if (info.value) {
        setValue(String(info.value))
      }
      if (info.correction) {
        setCorrection(String(info.correction))
      }
    }
  }, [])

  return (
    <>
      <TableCell component="th" scope="row">
        {info.name}
      </TableCell>
      <TableCell align="center">
        <TableInput
          value={value}
          onChange={onChangeValue}
          readOnly={!editState.isEdit}
        />
      </TableCell>
      <TableCell align="center">
        <TableInput
          value={correction}
          onChange={onChangeCorrection}
          readOnly={!editState.isEdit}
        />
      </TableCell>
    </>
  )
}

export default TableCells

const TableInput = styled.input`
  width: 50px;
  text-align: center;
`
