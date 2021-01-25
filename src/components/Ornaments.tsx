import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const Ornaments: React.FC = () => {
  return (
    <Grid item xs={12}>
      装飾品
      <table>
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
      </table>
    </Grid>
  )
}

export default Ornaments

// const OrnamentsWrap = styled.div`
//   background-color: #ac5e5e;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
