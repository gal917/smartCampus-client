import React from 'react'
import styled from 'styled-components';
import cardPower from '../../assets/cardPower.png'
import cardClimate from '../../assets/cardClimate.png'
import cardWater from '../../assets/cardWater.png'
import cardCleanliness from '../../assets/cardCleanliness.png'
import cardRecycle from '../../assets/cardRecycle.png'
import cardEcoHumanspace from '../../assets/cardEcoHumanspace.png'



const CardsRow = () => {
    return (
    <Container>
        <Card>
            <CustomImg src={cardPower} alt="Smart Campus power card"/>
            <TextArea>Optimizing power consumption
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        <Card>
            <CustomImg src={cardClimate} alt="Smart Campus climate card"/>
            <TextArea>
                Microclimate And air Quality monitoring
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        <Card>
            <CustomImg src={cardWater} alt="Smart Campus water card"/>
            <TextArea>
                Optimizing water consumption
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        <Card>
            <CustomImg src={cardRecycle} alt="Smart Campus power card"/>
            <TextArea>
                The recycling and garbage efficiency 
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        <Card>
            <CustomImg src={cardEcoHumanspace} alt="Smart Campus power card"/>
            <TextArea>
                Micro-climatic Eco-Human space
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        <Card>
            <CustomImg src={cardCleanliness} alt="Smart Campus power card"/>
            <TextArea>
                Increasing campus cleanliness
            </TextArea>
            <CardFooterButton>Learn More!</CardFooterButton>
        </Card>
        
    </Container>
  )
}

export default CardsRow

const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    text-align: center;
    height:100%;
`
const Card = styled.div`
    margin:24px;
    display: block;
    min-width: 250px;
    border: 3px solid #BDD7EE;
    border-radius: 15px;
    justify-content: space-around;
    background-color: #BDD7EE;

`
const CustomImg = styled.img`
    max-width: 100%;
    height: 50%;
`
const TextArea = styled.p`
    margin-bottom: 20px;
    line-height: 1.5;
    font-size: 36px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const CardFooterButton = styled.button`
    background-color:transparent;
    border: 3px transparent;
    font-size: 20px;
    padding-bottom: 10px;
    align-self: flex-end;
    flex: 1 1 auto;
    &:hover{
        opacity:0.5;
    }
`
