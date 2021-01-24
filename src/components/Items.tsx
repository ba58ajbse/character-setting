import React from 'react'
import styled from 'styled-components'

const Items: React.FC = () => {
  return (
    <ItemsWrap>
      所持品
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>個数</td>
            <td>効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>赤ポーション</td>
            <td>2</td>
            <td>HPを2d10回復</td>
          </tr>
          <tr>
            <td>青ポーション</td>
            <td>3</td>
            <td>MPを2d10回復</td>
          </tr>
          <tr>
            <td>ヒト血清</td>
            <td>1</td>
            <td>汚染度を1にする</td>
          </tr>
        </tbody>
      </table>
    </ItemsWrap>
  )
}

export default Items

const ItemsWrap = styled.div`
  background-color: #5e88ac;
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid;
  }
`
