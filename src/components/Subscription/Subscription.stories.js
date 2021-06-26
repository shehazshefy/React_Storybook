import React from 'react'
import { Primary } from '../Button/Button.stories'
import { Large } from '../Input/Input.stories'

export default {
    title: "Form/Subscription"
}

export const PrimarySubscription = () => 
    <>
        <Primary />
        <br />
        <br />
        <Large />
    </>

//Story within Story
//Dis: cant take advantage of args mechanism.