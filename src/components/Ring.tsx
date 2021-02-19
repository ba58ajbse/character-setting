import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Ring: React.FC = () => {
  return (
    <Grid item xs={6}>
      <StyledTable>
        <StyledTableCaption>指輪</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>星の指輪</td>
            <td>魔力 +1</td>
          </tr>
          <tr>
            <td>生命の指輪</td>
            <td>HP +5</td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Ring
