import React from 'react'
import { Grid } from '@material-ui/core'
// import styled from 'styled-components'
import Items from './Items'
import Catalyst from './Catalyst'
import Ornaments from './Ornaments'
import Ring from './Ring'
import ShieldArmor from './ShieldArmor'
import Weapon from './Weapon'

const Equipments: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Weapon />
      <Catalyst />
      <ShieldArmor />
      <Ring />
      <Ornaments />
      <Items />
    </Grid>
  )
}

export default Equipments

// const EquipmentsWrap = styled.div`
//   background-color: #a7a7a7;
// `
