import React from "react";

type Props = {
    setTimeSeconds: Function
};

function Controls(props:any){
    return(
        <section className = 'controls-container'>
            <button>Start</button>
            <button>Pause</button>
            <button>Reset</button>
        </section>
    )
}

export default Controls;