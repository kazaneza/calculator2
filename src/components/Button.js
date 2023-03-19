import React from 'react'
import classes from './Button.module.css'

function Button({value}) {
  return (
    //added condition to check if c and = are contained and we apply two class else if not contained we apply on class
    <div className={value == "c" || value == "=" ? `${classes.calcBtns} ${classes.res}` : `${classes.calcBtns}`}>
        {value}
    </div>
  )
}

export default Button;