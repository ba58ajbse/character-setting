import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

type StatusType = {
  mainStatus: {
    name: string
    value: number
  }[]
}

const status: StatusType = {
  mainStatus: [
    { name: 'HP', value: 10 },
    { name: 'MP', value: 10 },
    { name: '移動', value: 2 },
    { name: 'ダメージ修正', value: 8 },
    { name: '命中修正', value: 12 },
    { name: '魔力', value: 10 },
    { name: '詠唱修正', value: 10 },
    { name: '装甲', value: 4 },
    { name: '魔法防御', value: 2 },
    { name: 'ブロック', value: 1 },
  ],
}

const MainStatus: React.FC = () => {
  return (
    <Grid item xs={3}>
      <StyledTable>
        <StyledTableCaption>ステータス</StyledTableCaption>
        <tbody>
          {status.mainStatus.map((st) => {
            return (
              <tr key={st.name}>
                <th>{st.name}</th>
                <td>{st.value}</td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </Grid>
  )
}

export default MainStatus

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
