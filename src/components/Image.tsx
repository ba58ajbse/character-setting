import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'
import NoImage from '../assets/images/no_image.png'

const Image: React.FC = () => {
  return (
    <Grid item xs={3}>
      <img src={NoImage} alt="キャラクターイメージ" />
    </Grid>
  )
}

export default Image

// const ImageWrap = styled.div`
//   width: 250px;
//   height: 250px;
//   border: 1px solid black;
//   background-color: yellow;
// `
