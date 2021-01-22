import React from 'react'
import styled from 'styled-components'
import CharacterSheet from './components/CharacterSheet'

const App: React.FC = () => {
  return (
    <Container>
      <CharacterSheet />
    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  background-color: #282c34;
`
