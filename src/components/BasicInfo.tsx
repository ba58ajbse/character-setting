import React from 'react'
import styled from 'styled-components'
import NoImage from '../assets/images/no_image.png'
import Input from './Atom/Input'
import SearchSkill from './SearchSkill'

const BasicInfo: React.FC = () => {
  return (
    <InfoWrap>
      <img src={NoImage} alt="メイン画像" />
      <div className="basic-info">
        <Input id="name" label="名前：" type="text" isReadOnly={false} />
        <br />
        <Input id="age" label="年齢：" type="text" isReadOnly={false} />
        <br />
        <Input id="sex" label="性別：" type="text" isReadOnly={false} />
      </div>
      <div className="grace">
        <p>恩寵</p>
        <Input
          id="active-grace"
          label="アクティブ"
          type="text"
          isReadOnly={false}
        />
        <br />
        <Input
          id="passive-grace"
          label="パッシブ"
          type="text"
          isReadOnly={false}
        />
      </div>
      <SearchSkill />
    </InfoWrap>
  )
}

export default BasicInfo

const InfoWrap = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 1fr;
  grid-template-columns: 200px 1fr;
  padding: 8px;
  background-color: #d1d1d1;
  img {
    grid-row: 1 / 4;
    grid-column: 1 / 2;
  }
  .basic-info {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    margin-left: 8px;
  }
  .grace {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    margin-left: 8px;
  }
  .search-skill {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    width: 300px;
    margin-left: 8px;
  }
`
