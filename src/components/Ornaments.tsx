import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Ornaments: React.FC = () => {
  return (
    <Grid item xs={12}>
      <StyledTable>
        <StyledTableCaption>装飾品</StyledTableCaption>
        <thead>
          <tr>
            <td>場所</td>
            <td>名称</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>頭</td>
            <td>生贄のサークレット</td>
          </tr>
          <tr>
            <td>顔</td>
            <td />
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Ornaments
