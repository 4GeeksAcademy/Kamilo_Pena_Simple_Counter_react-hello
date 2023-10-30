import react from "react";
import React, {useState, useEffect } from "react";
import Timer from "./timer";
import {BsFillPlayFill, BsPauseFill, BsStopFill} from "react-icons/bs"


export default function Counter  ()  {

    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[isRuning, setIsRuning] = useState(null);


    useEffect(() => {
        let interval;
        if(isRuning){
            interval = setInterval(() => {
                if(seconds < 9){
                    setSeconds((seconds) => seconds + 1);
                }else if(minutes < 9){
                    setMinutes((minutes) => minutes + 1);
                    setSeconds (0);
                }else if(hours > 0){
                    setHours((hours) => hours + 1);
                    setMinutes(0);
                    setSeconds(0);
                }
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [seconds, minutes, hours, isRuning])
    
    //Star
    function startTimer (){
            setIsRuning(true);  
    }
    //Pause
    function pauseTimer () {
        setIsRuning(false);
    }
    //Stop
    function stopTimer () {
        setIsRuning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeMinutes= (e) => {
        setSeconds(e.target.value);
    }
    const changeHours= (e) => {
        setMinutes(e.target.value);
    }

    return(
        <div>
            <h1 className="Title" style={{marginLeft:750}}>Simple Counter</h1>

            <Timer seconds={seconds} minutes={minutes} hours={hours} changeMinutes={changeMinutes} changeHours={changeHours}/>

            <br/>

            {!isRuning && (
            <button className="btn btn-acept btn-lg" onClick={startTimer}
            style={{marginLeft:800, fontSize:30, backgroundColor:"green"}}>
                <BsFillPlayFill/>
            </button>)}
            {isRuning && (
            <button className="btn btn-warning btn-lg" onClick={pauseTimer} 
            style={{fontSize:30, marginLeft:800}}>
                <BsPauseFill/>
            </button>)}
            { " " }
            <button className="btn btn-danger btn-lg" onClick={stopTimer} 
            style={{fontSize:30, marginLeft:40}}>
                <BsStopFill/>
            </button>
            

        </div>
    );     

}