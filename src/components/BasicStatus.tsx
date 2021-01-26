import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

type StatusType = {
  basicStatus: {
    name: string
    value: number
  }[]
}
const status: StatusType = {
  basicStatus: [
    { name: '生命力', value: 10 },
    { name: '精神力', value: 10 },
    { name: '筋力', value: 10 },
    { name: '技量', value: 10 },
    { name: '神秘', value: 10 },
    { name: '信仰', value: 10 },
  ],
}

const BasicStatus: React.FC = () => {
  return (
    <Grid item xs={3}>
      <StyledTable>
        <StyledTableTitle>基礎ステータス</StyledTableTitle>
        <tbody>
          {status.basicStatus.map((st) => {
            return (
              <tr key={st.name}>
                <th>{st.name}</th>
                <td>{st.value}</td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default BasicStatus

const StyledTableTitle = styled.caption`
  font-size: 1.1rem;
`
const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  th {
    font-weight: normal;
  }
  td,
  th {
    border-bottom: solid 1px;
    padding: 8px;
    text-align: center;
  }
`
