import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

type StatusType = {
  searchSkill: {
    name: string
    value: number
    subValue: number
  }[]
}

const status: StatusType = {
  searchSkill: [
    { name: '聞き耳', value: 3, subValue: 3 },
    { name: '医学', value: 2, subValue: 1 },
    { name: '魔法完治', value: 2, subValue: 2 },
  ],
}

const SearchSkill: React.FC = () => {
  return (
    <Grid item xs={3}>
      <StyledTable>
        <StyledTableCaption>探索技能</StyledTableCaption>
        <thead>
          <tr>
            <td>名称</td>
            <td>レベル</td>
            <td>補正値</td>
          </tr>
        </thead>
        <tbody>
          {status.searchSkill.map((st) => {
            return (
              <tr key={st.name}>
                <th>{st.name}</th>
                <td>{st.value}</td>
                <td>{st.subValue}</td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default SearchSkill

const StyledTableCaption = styled.caption`
  font-size: 1.1rem;
`
const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  th {
    font-weight: normal;
  }
  td,
  th {
    border-bottom: solid 1px;
    padding: 8px;
    text-align: center;
  }
`
