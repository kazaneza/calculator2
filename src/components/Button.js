import React from 'react'
import classes from './Button.module.css'

function Button({value}) {
  return (
    <div className={value == "c" || value == "=" ? `${classes.calcBtns} ${classes.res}` : `${classes.calcBtns}`}>
        {value}
    </div>
  )
}

export default Button;