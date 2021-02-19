import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const Magic: React.FC = () => {
  return (
    <Grid item xs={12}>
      <p>魔法</p>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>消費MP</td>
            <td>射程</td>
            <td>時間</td>
            <td>抵抗</td>
            <td>動作</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>月光の矢</td>
            <td>3</td>
            <td>2</td>
            <td>一瞬</td>
            <td>半減</td>
            <td>主</td>
            <td>威力1d6の魔法攻撃をする</td>
          </tr>
          <tr>
            <td>小回復</td>
            <td>4</td>
            <td>1</td>
            <td>一瞬</td>
            <td>なし</td>
            <td>主</td>
            <td>対象を威力1d6で回復する</td>
          </tr>
        </tbody>
      </table>
    </Grid>
  )
}

export default Magic

// const MagicWrap = styled.div`
//   background-color: yellow;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
