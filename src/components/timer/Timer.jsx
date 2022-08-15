import React from 'react'
import { useState, useEffect } from 'react';


const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0, openFinishPopup, card} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                  clearInterval(myInterval)
                  openFinishPopup()
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    }, [card, minutes, openFinishPopup, seconds]);

    useEffect(()=> {
      setMinutes(2)
      setSeconds(0)
    }, [card])
    
    return (
        <div>
        { minutes === 0 && seconds === 0
            ? '0:00'
            : <p> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
        </div>
    )
}

export default Timer;