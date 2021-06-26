import React from 'react'
import Button from './Button'

//Write story for button in component story format
//this format has a default export and one or more named exports

export default {
    //title is mandatory and should be unique
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Args from Comp Level'
    }
    //Possible to apply args in component level which will be applied to all the stories.
    //However args at story level > args from comp level
}

//every named exports represents a story
//a menu item wil be created under the button title in the storybook for each of the named exports

//for button we have 4 variations - primary,secondary,success,danger

export const Primary = () => <Button variant='primary'>ChildA</Button>
export const Secondary = () => <Button variant='secondary'>ChildB</Button>
export const Success = () => <Button variant='success'>ChildC</Button>
export const Danger = () => <Button variant='danger'>ChildD</Button>

//Args Mechanism:
//1. Make a template out of our component
const Template = args => <Button {...args} />

//2. Export stories using this template
export const PrimaryA = Template.bind({})

//3. Specify args object on this const (props that we want to pass)
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}
/*
*   Args approach reduces the unique code we need to write
*   For complex components with lot more JSX, defining the args object is 
        much better than duplicating JSX
*   It is possible to reuse args from another story
*/

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}

/*
* Like this we can extend the props from other stories.
* We can see code reduce if a component has more (5 or 10 or.. ) props 
    & we can simply reuse the args from another story
* 
*/