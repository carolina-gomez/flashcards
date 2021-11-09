import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

export default function CreateDeck() {
    const history = useHistory();
   // const [deck, setDeck] = useState([])
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleNameChange = (e) => setName(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", name, description);

    };

    const handleCancel = () => {
        history.push("/");
    }

    return (
        <>
            <div className="breacrumbs">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                    </ol>
                </nav>
            </div>
            <h1>Create Deck</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                    id="name"
                    type="text" 
                    name="name"
                    className="form-control" 
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Deck Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                    className="form-control" 
                    id="description"
                    type="text"
                    name="description" 
                    rows="3" 
                    onChange={handleDescriptionChange}
                    value={description}
                    placeholder="Brief description of the deck">
                    </textarea>
                </div>
                <button type="button" className="btn btn-secondary mr-2" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary mr-2" >Submit</button>
            </form>
        </>
    )
}