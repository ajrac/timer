import React, {useState, useEffect} from 'react';
import './Main.css';
import calculateTimer from '../../Helpers/CalculateTimer';
import Controls from '../Controls/Controls';

function Main(){
    const [timeSeconds, setTimeSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number|string>>([]);
    useEffect(() =>{
        let timeArray:Array<number|string> = calculateTimer(timeSeconds);
        setTimerArray(timeArray);
    }, [timeSeconds]);
    return(
        <main>
            <section className = 'time-container'>
                <p className = 'timer-text'>{timerArray[0]}</p>
                <span>:</span>
                <p className = 'timer-text'>{timerArray[1]}</p>
                <span>:</span>
                <p className = 'timer-text'>{timerArray[2]}</p>
            </section>
            <Controls setTimeSeconds = {setTimeSeconds}/>
        </main>
    )
}

export default Main;