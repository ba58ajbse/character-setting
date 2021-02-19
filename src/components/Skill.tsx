import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

const Skill: React.FC = () => {
  return (
    <Grid item xs={12}>
      <StyledTable>
        <StyledTableCaption>スキル</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>投擲名人</td>
            <td>投擲を補助動作で行う</td>
          </tr>
          <tr>
            <td>致命</td>
            <td>C+10</td>
          </tr>
          <tr>
            <td>毒の心得</td>
            <td>毒薬を補助動作で武器に添附</td>
          </tr>
          <tr>
            <td>両刀</td>
            <td>
              主動作で攻撃と魔法を１回ずつ使用しても良い。使用時、命中/詠唱-20
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default Skill
