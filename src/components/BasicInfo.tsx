import React from 'react'
// import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const BasicInfo: React.FC = () => {
  return (
    <Grid item xs={12}>
      <label htmlFor="name">
        名前
        <input type="text" id="name" />
      </label>
      <label htmlFor="age">
        年齢
        <input type="text" id="age" />
      </label>
      <label htmlFor="level">
        レベル
        <input type="text" id="level" />
      </label>
      <label htmlFor="sex">
        性別
        <input type="text" id="sex" />
      </label>
      <label htmlFor="money">
        所持金
        <input type="text" id="money" />
      </label>
    </Grid>
  )
}

export default BasicInfo

// const InfoWrap = styled.div`
//   background-color: #b3b3b3;
//   input {
//     border-bottom: 1px solid black;
//   }
// `
