import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledTable, StyledTableCaption } from './styled-component/styled'

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
