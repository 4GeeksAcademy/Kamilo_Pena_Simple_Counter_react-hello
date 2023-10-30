import React from "react";
import { BsStopwatch } from "react-icons/bs";
import styled from "styled-components";


export default function Timer ({seconds, minutes, hours, changeMinutes, changeHours}) {

    const TimerWrapper = styled.div`
        margin-top: 30;
        width: 600px;
        margin-left: auto;
        margin-right:auto;
        background-color: black;
        color:white;
        border-radius:5px;
        display:flex;
        margin-top:30px;
        align-items:center;
        justify-content:center;
        padding: 1rem 0;
        

        .stop-watch {
            font-size:6rem;
            margin-rigth: 1rem;
        }
        label{
            margin-bottom: 0.5rem;
        }
        input{
            width: 100px;
            margin-rigth:1rem;
            font-size:4.5rem;
            font-weight:600;
            text-align:center;
            padding:0rem 0.5rem;
            border-radius:5px;
        }
        input:hover{
            background-color:grey;
        }


    `;

    return(
        <TimerWrapper>
            <BsStopwatch className="stop-watch"/>
            <div className="d-flex flex-column">
                <input value={hours} onChange={changeHours}/>
            </div>
            <div className="d-flex flex-column">
                <input value={minutes} onChange={changeMinutes}/>
            </div>
            <div className="d-flex flex-column">
                <input value={seconds} />
            </div>
        </TimerWrapper>
    )
}