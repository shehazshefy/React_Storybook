import React from 'react'
import Button from './Button'

//Write story for button in component story format
//this format has a default export and one or more named exports

export default {
    //title is mandatory and should be unique
    title: 'Form/Button',
    component: Button
}

//every named exports represents a story
//a menu item wil be created under the button title in the storybook for each of the named exports

//for button we have 4 variations - primary,secondary,success,danger

export const Primary = () => <Button variant='primary'>ChildA</Button>

export const Secondary = () => <Button variant='secondary'>ChildB</Button>

export const Success = () => <Button variant='success'>ChildC</Button>

export const Danger = () => <Button variant='danger'>ChildD</Button>
