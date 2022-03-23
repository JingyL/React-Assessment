import React from "react";



function GenerateStory({resetElement, noun1, noun2, adjective, color}) {
    const reset = () => {
        resetElement();
    }
    return (
        <>
        <p>There was a {color} {noun1} who loved a {adjective} {noun2}</p>
        <button onClick={reset}>Reset Story</button>
        </>
    );
}

export default GenerateStory;