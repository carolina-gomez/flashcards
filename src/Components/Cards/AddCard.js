    //createCard(deckId, card, signal)
    //path="/decks/:deckId/cards/new"

    import { Link, useParams, useHistory } from "react-router-dom"
    import React, { useState, useEffect } from "react";
    import { readDeck, createCard } from "../../utils/api"
    
    export default function AddCard() {
        const history = useHistory();
        const {deckId} = useParams();
        const [deck, setDeck] = useState({cards: []});
        const [front, setFront] = useState("");
        const [back, setBack] = useState("");
       const handleFrontChange = (e) => setFront(e.target.value);
       const handleBackChange = (e) => setBack(e.target.value);
    
    
        const loadDeck = () => {
          readDeck(deckId).then(setDeck)
        }
      
        useEffect(() => {
            loadDeck()
        
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [deck.id]);

        const handleSubmit = (e) => {
            e.preventDefault();
            const newCard = {
                "front": front,
                "back": back,
                "deckId": deckId
            }
            
            createCard(deckId, newCard).then(() => history.push(`/decks/${deckId}`))
          }


        const handleDone = () => {
            history.push(`/decks/${deckId}`)
        }


    return (
    <>
        <div className="breacrumbs">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Card</li>
            </ol>
        </nav>
        </div>
        <h1>{deck.name}: Add Card</h1>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="front" className="form-label">Front</label>
                    <textarea 
                    className="form-control" 
                    id="front"
                    type="text"
                    name="front" 
                    rows="3" 
                    onChange={handleFrontChange}
                    value={front}
                    placeholder="Front side of card">
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="back" className="form-label">Back</label>
                    <textarea 
                    className="form-control" 
                    id="back"
                    type="text"
                    name="back" 
                    rows="3" 
                    onChange={handleBackChange}
                    value={back}
                    placeholder="Back side of card">
                    </textarea>
                </div>
                <button type="button" className="btn btn-secondary mr-2" onClick={handleDone}>Done</button>
                <button type="submit" className="btn btn-primary mr-2" >Submit</button>
            </form>

    </>
    )
}