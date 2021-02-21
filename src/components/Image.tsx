import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import Resizer from 'react-image-file-resizer'
import NoImage from '../assets/images/no_image.png'
import { ImageStateType } from '../Interface/interface'

type PropsType = {
  image: ImageStateType | undefined
  setImage: React.Dispatch<React.SetStateAction<ImageStateType | undefined>>
}

const Image: React.FC<PropsType> = ({ image, setImage }) => {
  const [fileURL, setFileURL] = useState(NoImage)
  const uploadImage = async (files: FileList | null) => {
    if (files === null) return
    try {
      const file = files[0]
      const type = file.type.split('/')[1]
      const url = await resizeFile(file, type)
      const identifier = file.name.split('.')[0]
      setImage({ ...image, file, type, url, identifier })
    } catch (error) {
      console.log(error)
    }
  }

  const resizeFile = (file: File, type: string) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        280,
        360,
        type,
        100,
        0,
        (uri) => {
          resolve(uri)
        },
        'base64',
        200,
        200
      )
    })

  useEffect(() => {
    if (image && image.url) {
      if (typeof image.url === 'string') setFileURL(image.url)
    }
  }, [image])

  return (
    <Grid item xs={3}>
      <ImageWrap>
        <img src={fileURL} alt="キャラクターイメージ" />
      </ImageWrap>
      <InputWrap>
        <label htmlFor="image">
          ファイルを選択
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              uploadImage(e.target.files)
            }
            style={{ display: 'none' }}
          />
        </label>
      </InputWrap>
    </Grid>
  )
}

export default Image

const ImageWrap = styled.div`
  width: 300px;
  height: 320px;
  img {
    margin: 0 auto;
  }
`

const InputWrap = styled.div`
  text-align: center;
  label {
    padding: 8px 12px;
    background-color: #c1c1c1;
    border-radius: 4px;
    cursor: pointer;
  }
`
