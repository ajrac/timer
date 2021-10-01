function calculateTimer(timeSeconds: number): Array<number|string>{
    let hours: number = Math.floor(timeSeconds/3600);
    let minutes: number = Math.floor((timeSeconds - (hours*3600))/60);
    let seconds: number = Math.floor(timeSeconds - (hours*3600) - (minutes*60));
    
    let hoursFormat = hours < 10 ? `0${hours}` : hours;

    return [
        hoursFormat,
        minutes,
        seconds
    ];
}

export default calculateTimer;