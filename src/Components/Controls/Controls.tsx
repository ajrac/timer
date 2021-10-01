import React, {useState} from "react";
import './Controls.css';

type Props = {
    setTimeSeconds: Function
};

function Controls(props:any){
    const {setTimeSeconds} = props;
    const [intervalID, setIntervalID] = useState<number>(0);

    const handleStartButton = () => {
        let interval:any = setInterval(() => {
            setTimeSeconds((previousState:number)=>previousState+1)
        }, 1000)
        setIntervalID(interval);
    }
    const handlePauseButton = () => {
        clearInterval(intervalID);
    }
    const handleResetButton = () => {
        clearInterval(intervalID);
        setTimeSeconds(0);
    }
    return(
        <section className = 'controls-container'>
            <button onClick={handleStartButton}>Start</button>
            <button onClick={handlePauseButton}>Pause</button>
            <button onClick={handleResetButton}>Reset</button>
        </section>
    )
}

export default Controls;