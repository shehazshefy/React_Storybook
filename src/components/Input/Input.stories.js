import React from 'react'
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size = 'small' placeholder="Small Value" />
export const Medium = () => <Input size = 'medium' placeholder="Medium Value" />
export const Large = () => <Input size = 'large' placeholder="Large Value" />

//To change story name:
//Small.storyName = 'Small Input'