import React from 'react'
import styled from 'styled-components'

const BasicInfo: React.FC = () => {
  return (
    <InfoWrap>
      <>
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
      </>
    </InfoWrap>
  )
}

export default BasicInfo

const InfoWrap = styled.div`
  background-color: #b3b3b3;
  input {
    border-bottom: 1px solid black;
  }
`
