import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const Grace: React.FC = () => {
  return (
    <Grid item xs={12}>
      <p>恩寵</p>
      <table>
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
      </table>
    </Grid>
  )
}

export default Grace

// const GraceWrap = styled.div`
//   background-color: #ffb76a;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
