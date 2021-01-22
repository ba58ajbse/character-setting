import React from 'react'
import { EditContext, useEdit } from '../context/edit'
import BasicInfo from './BasicInfo'
import BasicStatus from './BasicStatus'
import Image from './Image'
import MainStatus from './MainStatus'

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
        <div className="glace">恩寵</div>
        <div className="search-skill">探索技能</div>
        <div className="skill">スキル</div>
        <div className="magic">魔法</div>
        <div className="equipments">
          装備
          <div className="weapon">武器</div>
          <div className="catalyst">触媒</div>
          <div className="shield">盾</div>
          <div className="armor">防具</div>
          <div className="ring">指輪</div>
          <div className="ornaments">装飾品</div>
          <div className="item">所持品</div>
        </div>
      </form>
    </EditContext.Provider>
  )
}

export default CharacterSheet
