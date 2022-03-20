import React from "react";



function GenerateStory({resetElement, noun1, noun2, adjective, color}) {
    const reset = () => {
        resetElement();
    }
    return (
        <>
        <p>{noun1} {noun2} {adjective} {color}</p>
        <button onClick={reset}>Reset Story</button>
        </>
    );
}

export default GenerateStory;