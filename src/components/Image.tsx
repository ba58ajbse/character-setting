import React from 'react'
import styled from 'styled-components'
import NoImage from '../assets/images/no_image.png'

const Image: React.FC = () => {
  return (
    <ImageWrap>
      <img src={NoImage} alt="キャラクターイメージ" />
    </ImageWrap>
  )
}

export default Image

const ImageWrap = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
  background-color: yellow;
`
