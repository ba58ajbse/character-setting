import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

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
        <StyledTableCaption>基礎ステータス</StyledTableCaption>
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
