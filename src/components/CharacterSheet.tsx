import React from 'react'
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

const CharacterSheet: React.FC = () => {
  const editState = useEdit()

  return (
    <EditContext.Provider value={editState}>
      <form>
        <h1>キャラクターシート</h1>
        <BasicInfo />
        <Image />
        <BasicStatus />
        <MainStatus />
        <Grace />
        <SearchSkill />
        <Skill />
        <Magic />
        {/* <div className="equipments">
          装備
          <div className="weapon">武器</div>
          <div className="catalyst">触媒</div>
          <div className="shield">盾</div>
          <div className="armor">防具</div>
          <div className="ring">指輪</div>
          <div className="ornaments">装飾品</div>
          <div className="item">所持品</div>
        </div> */}
        <Equipments />
      </form>
    </EditContext.Provider>
  )
}

export default CharacterSheet
