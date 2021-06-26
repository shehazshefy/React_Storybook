import React from 'react'
import { Button } from '@material-ui/core'

export default {
    title: 'MaterialUI/Button',
    component: Button
}

export const Primary = () => <Button variant="contained" color="primary">Primary</Button>
export const Secondary = () => <Button variant="contained" color="secondary">Secondary</Button>
