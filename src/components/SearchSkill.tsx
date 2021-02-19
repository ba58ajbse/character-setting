import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

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
