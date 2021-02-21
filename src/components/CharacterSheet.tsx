import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { EditContext, useEdit } from '../context/edit'
import BasicInfo from './BasicInfo'
import BasicStatus from './BasicStatus'
import Equipments from './Equipments'
import Grace from './Grace'
import Image from './Image'
import Magic from './Magic'
import MainStatus from './MainStatus'
import SearchSkill from './SearchSkill'
import Skill from './Skill'
import { StyledHr } from './styled-component/styled'
import xmlbuilder from '../ZIP/xmlbuild'
import save from '../ZIP/save'
import data from '../data/status'
import { ImageStateType } from '../Interface/interface'

const CharacterSheet: React.FC = () => {
  const editState = useEdit()
  const [image, setImage] = useState<ImageStateType>()

  return (
    <EditContext.Provider value={editState}>
      <form>
        <h1>キャラクターシート</h1>
        <Button variant="contained" onClick={() => xmlbuilder(data)}>
          保存する
        </Button>
        <Button variant="contained" onClick={() => save(data)}>
          ファイルに保存
        </Button>
        <Grid container spacing={3}>
          <BasicInfo />
          <StyledHr />
          <Image image={image} setImage={setImage} />
          <BasicStatus status={data.basicStatus} />
          <MainStatus />
          <SearchSkill />
          <Grace />
          <Skill />
          <Magic />
        </Grid>
        <Equipments />
      </form>
    </EditContext.Provider>
  )
}

export default CharacterSheet
