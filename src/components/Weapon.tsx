import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Weapon: React.FC = () => {
  return (
    <Grid item xs={6}>
      <StyledTable>
        <StyledTableCaption>武器</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>威力</td>
            <td>命中</td>
            <td>C値</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>薄暮の黒短刀</td>
            <td>1d10+3</td>
            <td>60</td>
            <td>15</td>
            <td />
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Weapon
