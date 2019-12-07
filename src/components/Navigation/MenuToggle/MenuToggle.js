import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]
{/* <i class="fa fa-user-circle-o" aria-hidden="true"></i> */}
    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }


    return (
        <i
        className={cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}

export default MenuToggle