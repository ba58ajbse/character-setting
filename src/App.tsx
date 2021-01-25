import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import CharacterSheet from './components/CharacterSheet'

const App: React.FC = () => {
  return (
    <Container>
      <CharacterSheet />
    </Container>
  )
}

export default App

const Container = styled(Grid)`
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid black;
  color: black;
  align-items: 'center';
`

const style = {
  padding: 10,
}
