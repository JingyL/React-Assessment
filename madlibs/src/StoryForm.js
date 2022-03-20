import React, { useState } from "react";

function StoryForm({ addElement }) {
    const INITIAL_STATE = {
        noun1: '',
        noun2: '',
        adjective: '',
        color: '',
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addElement(formData);
        setFormData(INITIAL_STATE)
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
                        onChange={handleChange}
                        required="required" />
                </div>
                <div>
                    <label htmlFor="noun2">Noun2</label>
                    <input
                        name="noun2"
                        type="text"
                        placeholder="noun2"
                        value={formData.noun2}
                        onChange={handleChange}
                        required="required" />
                </div>
                <div>
                    <label htmlFor="adjective">Adjective</label>
                    <input
                        name="adjective"
                        type="text"
                        placeholder="adjective"
                        value={formData.adjective}
                        onChange={handleChange}
                        required="required" />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        name="color"
                        type="text"
                        placeholder="color"
                        value={formData.color}
                        onChange={handleChange}
                        required="required" />
                </div>
                <button>Generate Story</button>
            </form>
        </>
    );
}

export default StoryForm;