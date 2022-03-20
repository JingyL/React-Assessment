import React, { useState } from "react";
import StoryForm from './StoryForm';
import { v4 as uuid } from 'uuid';
import GenerateStory from "./GenerateStory";

function Story() {
    const [elements, setElements] = useState({})
    const [start, setStart] = useState(true)
    const addElement = (newElements) => {
        setElements({...newElements, id: uuid()});
        setStart(false);
    }
    const resetElement = () => {
        setElements({});
        setStart(true);
    }

    return (
        <div>
            {
                start ?
                    <StoryForm addElement={addElement}></StoryForm>
                    : <GenerateStory
                        resetElement={resetElement}
                        key={elements.id}
                        noun1={elements.noun1}
                        noun2={elements.noun2}
                        adjective={elements.adjective}
                        color={elements.color}
                    ></GenerateStory>
            }

        </div>
    );
}

export default Story;