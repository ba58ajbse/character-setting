import React from 'react'
import styled from 'styled-components'

const Catalyst: React.FC = () => {
  return (
    <CatalystWrap>
      触媒
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>魔力</td>
            <td>詠唱</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>魔術師の杖</td>
            <td>3</td>
            <td>10</td>
            <td />
          </tr>
        </tbody>
      </table>
    </CatalystWrap>
  )
}

export default Catalyst

const CatalystWrap = styled.div`
  background-color: #b284c6;
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid;
  }
`
