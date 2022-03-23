import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';

function StoryForm({ addElement }) {
    const INITIAL_STATE = {
        noun1: '',
        noun2: '',
        adjective: '',
        color: '',
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [touchedNoun1, setTouchedNoun1] = useState(false)
    const [touchedNoun2, setTouchedNoun2] = useState(false)
    const [touchedAdj, setTouchedAdj] = useState(false)
    const [touchedColor, setTouchedColor] = useState(false)
    const handleChange_Noun1 = (e) => {
        const { name, value } = e.target;
        setFormData(currentFormData => ({
            ...currentFormData,
            [name]: value
        }))
        setTouchedNoun1(true)
    }
    const handleChange_Noun2 = (e) => {
        const { name, value } = e.target;
        setFormData(currentFormData => ({
            ...currentFormData,
            [name]: value
        }))
        setTouchedNoun2(true)
    }
    const handleChange_Adj = (e) => {
        const { name, value } = e.target;
        setFormData(currentFormData => ({
            ...currentFormData,
            [name]: value
        }))
        setTouchedAdj(true)
    }
    const handleChange_Color = (e) => {
        const { name, value } = e.target;
        setFormData(currentFormData => ({
            ...currentFormData,
            [name]: value
        }))
        setTouchedColor(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData["noun1"] && formData["noun2"] && formData["adjective"] && formData["color"]) {
            addElement(formData);
            setFormData(INITIAL_STATE)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="noun1">Noun1</label>
                    <input
                        name="noun1"
                        type="text"
                        placeholder="noun1"
                        value={formData.noun1}
                        onChange={handleChange_Noun1}
                    />
                    {!formData["noun1"] && touchedNoun1 &&
                        <span >Cannot be empty</span>}
                </div>
                <div>
                    <label htmlFor="noun2">Noun2</label>
                    <input
                        name="noun2"
                        type="text"
                        placeholder="noun2"
                        value={formData.noun2}
                        onChange={handleChange_Noun2}
                    />
                    {!formData["noun2"] && touchedNoun2 &&
                        <span>Cannot be empty</span>}
                </div>
                <div>
                    <label htmlFor="adjective">Adjective</label>
                    <input
                        name="adjective"
                        type="text"
                        placeholder="adjective"
                        value={formData.adjective}
                        onChange={handleChange_Adj}
                    />
                    {!formData["adjective"] && touchedAdj &&
                        <span>Cannot be empty</span>}
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        name="color"
                        type="text"
                        placeholder="color"
                        value={formData.color}
                        onChange={handleChange_Color}
                    />
                    {!formData["color"] && touchedColor &&
                        <span>Cannot be empty</span>}
                </div>
                <button>Generate Story</button>
            </form>

        </>
    );
}

export default StoryForm;