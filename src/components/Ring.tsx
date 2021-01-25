import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const Ring: React.FC = () => {
  return (
    <Grid item xs={6}>
      指輪
      <table>
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
      </table>
    </Grid>
  )
}

export default Ring

// const RingWrap = styled.div`
//   background-color: #ac5e5e;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
