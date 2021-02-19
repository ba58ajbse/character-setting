import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const ShieldArmor: React.FC = () => {
  return (
    <Grid item xs={6}>
      盾
      <table>
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
        </tbody>
      </table>
      防具
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>装甲</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>魔術師のローブ</td>
            <td>2</td>
            <td>魔法D-2</td>
          </tr>
        </tbody>
      </table>
    </Grid>
  )
}

export default ShieldArmor

// const ShieldArmorWrap = styled.div`
//   background-color: #74bdb6;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
