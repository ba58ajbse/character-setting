import React from 'react'
import styled from 'styled-components'
import Catalyst from './Catalyst'
import Items from './Items'
import Ornaments from './Ornaments'
import Ring from './Ring'
import ShieldArmor from './ShieldArmor'
import Weapon from './Weapon'

const Equipments: React.FC = () => {
  return (
    <EquipmentsWrap>
      装備
      <Weapon />
      <Catalyst />
      <ShieldArmor />
      <Ring />
      <Ornaments />
      <Items />
    </EquipmentsWrap>
  )
}

export default Equipments

const EquipmentsWrap = styled.div`
  background-color: #a7a7a7;
`
