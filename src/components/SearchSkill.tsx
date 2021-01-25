import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'

const SearchSkill: React.FC = () => {
  return (
    <Grid item xs={3}>
      <p>探索技能</p>
      <table>
        <tbody>
          <tr>
            <td>聞き耳</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td>医学</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td>魔法感知</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Grid>
  )
}

export default SearchSkill

// const SearchSkillWrap = styled.div`
//   background-color: pink;
//   table {
//     table-layout: fixed;
//     border-collapse: collapse;
//     border: 1px solid;
//   }
// `
