import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const ShieldArmor: React.FC = () => {
  return (
    <Grid item xs={6}>
      <StyledTable>
        <StyledTableCaption>盾・防具</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>装甲</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>バックラー</td>
            <td>1</td>
            <td />
          </tr>
          <tr>
            <td>魔術師のローブ</td>
            <td>2</td>
            <td>魔法D-2</td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default ShieldArmor
