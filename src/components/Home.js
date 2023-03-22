import React, {useState} from 'react'
import classes from './Home.module.css'
import Button from './Button'


function Home() {

  const [res, setRes] = useState("");
  const buttons = ["c","9","/","8", "7", "6","*","5","4","3","+","2","1","0","-",".","DEL","="];
  const handler = (arg) => {
    if (arg == "c") setRes ("");
    else if (arg == "=") findval ();
    else if (arg == "DEL") {
      let n = res.length;
      if (n>0)
      setRes (res.slice (0, n-1));
    }
    else setRes (res.concat(arg))
  }
  const findval = () => {
    let result = Function("return " + res)();
    setRes (result.toString());
  }

  return (
    <div className={classes.home}>
        <div className={classes.inner}>
          <div className={classes.result}>
            <div className={classes.resbox}>
              {res}
            </div>
          </div>
        
        <div className={classes.btns}>
          {buttons.map((ele,index) => {return <Button handler = {handler} value={ele} key={index} />})}
        </div>
        </div>
    </div>
  )
}

export default Home;