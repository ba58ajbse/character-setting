import React from 'react'
import { TextField, Button } from '@material-ui/core'
import BasicInfo from './BasicInfo'
import { EditContext, useEdit } from '../context/edit'

const CharacterSheet: React.FC = () => {
  const editState = useEdit()

  return (
    <EditContext.Provider value={editState}>
      <div>
        <h1>キャラクターシート</h1>
        <Button variant="contained" onClick={() => editState.toggleEdit()}>
          Edit
        </Button>
        <TextField />
        <BasicInfo />
        <div>
          <div>基礎ステータス</div>
          <div>反映後ステータス</div>
        </div>
        <div>
          <div>スキル</div>
        </div>
        <div>
          <div>武器</div>
          <div>杖</div>
          <div>装備品</div>
        </div>
        <div>
          <div>魔法</div>
        </div>
        <div>
          <div>消耗品</div>
        </div>
      </div>
    </EditContext.Provider>
  )
}

export default CharacterSheet
