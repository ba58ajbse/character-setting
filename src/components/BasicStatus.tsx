import React from 'react'
import styled from 'styled-components'

const BasicStatus: React.FC = () => {
  return (
    <StatusWrap>
      <p>基礎ステータス</p>
      <table>
        <tbody>
          <tr>
            <td className="vitality">生命力</td>
            <td className="vitality-value">10</td>
          </tr>
          <tr>
            <td className="mental">精神力</td>
            <td className="mental-value">10</td>
          </tr>
          <tr>
            <td className="power">筋力</td>
            <td className="power-value">10</td>
          </tr>
          <tr>
            <td className="technique">技量</td>
            <td className="technique-value">10</td>
          </tr>
          <tr>
            <td className="mysteries">神秘</td>
            <td className="mysteries-value">10</td>
          </tr>
          <tr>
            <td className="faith">信仰</td>
            <td className="faith-value">10</td>
          </tr>
        </tbody>
      </table>
    </StatusWrap>
  )
}

export default BasicStatus

const StatusWrap = styled.div`
  background-color: #00cf00;
  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid black;
  }
`
