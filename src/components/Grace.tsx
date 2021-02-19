import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Grace: React.FC = () => {
  return (
    <Grid item xs={12}>
      <StyledTable>
        <StyledTableCaption>恩寵</StyledTableCaption>
        <tbody>
          <tr>
            <td>アクティブ</td>
            <td>アクティブ恩寵</td>
          </tr>
          <tr>
            <td>パッシブ</td>
            <td>パッシブの恩寵</td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Grace
