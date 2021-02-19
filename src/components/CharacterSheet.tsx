import React from 'react'
import { Grid } from '@material-ui/core'
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

const CharacterSheet: React.FC = () => {
  const editState = useEdit()

  return (
    <EditContext.Provider value={editState}>
      <form>
        <h1>キャラクターシート</h1>
        <Grid container spacing={3}>
          <BasicInfo />
          <StyledHr />
          <Image />
          <BasicStatus />
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
