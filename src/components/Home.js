import React from 'react'
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.home}>
        <div className={classes.inner}>
          <div className={classes.result}>
            <div className={classes.resbox}></div>
          </div>
        </div>
        <div className={classes.btns}></div>
    </div>
  )
}

export default Home