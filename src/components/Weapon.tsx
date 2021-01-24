import React from 'react'
import styled from 'styled-components'

const Weapon: React.FC = () => {
  return (
    <WeaponWrap>
      武器
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>威力</td>
            <td>命中</td>
            <td>C値</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>薄暮の黒短刀</td>
            <td>1d10+3</td>
            <td>60</td>
            <td>15</td>
            <td />
          </tr>
        </tbody>
      </table>
    </WeaponWrap>
  )
}

export default Weapon

const WeaponWrap = styled.div`
  background-color: #ac5e5e;
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid;
  }
`
