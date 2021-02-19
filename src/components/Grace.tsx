import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Grace: React.FC = () => {
  return (
    <Grid item xs={12}>
      <StyledTable>
        <StyledTableCaption>恩寵</StyledTableCaption>
        <thead>
          <tr>
            <td>タイプ</td>
            <td>名称</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>アクティブ</td>
            <td>アクティブ恩寵</td>
            <td>アクティブ恩寵効果</td>
          </tr>
          <tr>
            <td>パッシブ</td>
            <td>パッシブの恩寵</td>
            <td>パッシブ恩寵効果</td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Grace
