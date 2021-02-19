import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Items: React.FC = () => {
  return (
    <Grid item xs={12}>
      <StyledTable>
        <StyledTableCaption>所持品</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>個数</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>赤ポーション</td>
            <td>2</td>
            <td>HPを2d10回復</td>
          </tr>
          <tr>
            <td>青ポーション</td>
            <td>3</td>
            <td>MPを2d10回復</td>
          </tr>
          <tr>
            <td>ヒト血清</td>
            <td>1</td>
            <td>汚染度を1にする</td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Items
