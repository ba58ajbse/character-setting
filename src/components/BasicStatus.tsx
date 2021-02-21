import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

type PropsType = {
  status: {
    name: string
    value: number
  }[]
}

const BasicStatus: React.FC<PropsType> = ({ status }) => {
  return (
    <Grid item xs={3}>
      <StyledTable>
        <StyledTableCaption>基礎ステータス</StyledTableCaption>
        <tbody>
          {status.map((st) => {
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
