import React, { useContext, useEffect } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'
import TableCells from './TableCells'
import { EditContext } from '../context/edit'

const searchSkillInfo = [
  { name: '医学', value: 3, correction: 2 },
  { name: '聞き耳', value: 2, correction: 2 },
]

const SearchSkill: React.FC = () => {
  const editState = useContext(EditContext)

  useEffect(() => {
    if (!editState.isEdit) {
      const emptyObj = { name: '', value: 0, correction: 0 }
      searchSkillInfo.push(emptyObj)
    }
  }, [editState.isEdit])
  return (
    <>
      <TableContainer>
        <p>探索技能</p>
        <Table className="search-skill">
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell align="center">レベル</TableCell>
              <TableCell align="center">補正</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchSkillInfo.map((info) => {
              return (
                <TableRow key={info.name}>
                  <TableCells info={info} />
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default SearchSkill
