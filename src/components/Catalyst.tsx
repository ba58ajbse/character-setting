import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Catalyst: React.FC = () => {
  return (
    <Grid item xs={6}>
      <StyledTable>
        <StyledTableCaption>触媒</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>魔力</td>
            <td>詠唱</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>魔術師の杖</td>
            <td>3</td>
            <td>10</td>
            <td />
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Catalyst
