import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import { Image } from 'react-native'
import { ShareDog } from './ShareDog'

const DogView = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    ` 

const ButtonView = styled.View`
    flex: 1.5;
    `

const DogImage = styled.Image`
    width: 270px;
    height: 270px;
    `

const RandomDogButton = styled.TouchableOpacity`
    background-color: pink;
    border-radius: 50px;
    padding: 10px;
    margin-top: 30px;
    `

const ButtonText = styled.Text`
    font-size: 20px;
    ` 

export const RandomDog = () => {
    const [dogs, setDogs] = useState({})      
    
    const fetchDogs = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((json) => { 
            setDogs(json)
        })
     }   
     /* Here we call the function so that a dog is shown when the page is mounted */
        useEffect(() => {
            fetchDogs()
        }, [] )
    
        return (
            <>
                <DogView>
                    <DogImage source={{uri: dogs.message}} />
                </DogView>
                <ButtonView>
                    <RandomDogButton onPress={fetchDogs}>
                        <ButtonText>Another cute dog, please!</ButtonText>
                    </RandomDogButton>
                </ButtonView>
                <ShareDog />
            </>
        )
}