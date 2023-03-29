import React from 'react'
import styled from 'styled-components'
import "../Style.css"
import campus from '../assets/campus.jpg'

const InfoSection = () => {
  return (
    <MainContainer>
        <CustomImg src={campus} alt="Smart Campus screnery"/>
        <TextArea>
            <h2>Smart Campus</h2>
            <p>is an innovative approach to a common place based on optimal use of resources while maximizing the comfort of living.
                At the base of the smart campus is a detection, information processing and decision-making system based on adaptive AI.
                The results of system activity are provided to users according to their roles on campus.
                In more advanced stages, the system will know how to make decisions and perform preventive actions while notifying the relevant officials.
            </p>
        </TextArea> 
    </MainContainer>
  )
}

export default InfoSection
const CustomImg = styled.img`
max-width: 100%;
height: auto;
`
const TextArea = styled.div`
p {
    margin-bottom: 20px;
    line-height: 1.5;
  }
h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

`
const MainContainer = styled.div`
@media (max-width: 768px) {
    display: block;
}
background-color: #f7f7f7;
padding: 50px;
display: flex;
width: 100%;
align-items: center;
text-align: center;
`

