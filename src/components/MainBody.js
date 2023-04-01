import React from 'react'
import styled from 'styled-components'
import "../Style.css"
import CardsRow from './card/CardsRow'
import InfoSection from './InfoSection'
const MainBody = () => {
  return (  
    <>
       <InfoSection/>
       <br/>
       <CardsRow/>
       <br/>
    </>
  )
}

export default MainBody
