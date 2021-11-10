    //updateCard(updatedCard, signal)

    import { Link, useParams, useHistory } from "react-router-dom"
    import React, { useState, useEffect } from "react";
    import { readDeck, updateCard, readCard } from "../../utils/api"
    
    export default function EditCard() {
        const history = useHistory();
        const {deckId, cardId } = useParams();
        const [deck, setDeck] = useState({cards: []});
        const [card, setCard] = useState({})
        const [front, setFront] = useState("");
        const [back, setBack] = useState("");
        
       const handleFrontChange = (e) => setFront(e.target.value);
       const handleBackChange = (e) => setBack(e.target.value);
      
        useEffect(() => {
            readDeck(deckId).then(setDeck)
            readCard(cardId).then(setCard).then(() => setFront(card.front)).then(setBack(card.back))

          // eslint-disable-next-line 
          }, [deckId, cardId]);

        const handleSubmit = (e) => {
            e.preventDefault();
            const updatedCard = {
                "id": cardId,
                "front": front,
                "back": back,
                "deckId": Number(deckId)
            }

            if (front === undefined) {
                updatedCard.front = card.front
            }

            if (back === undefined) {
                updatedCard.back = card.back
            }

             updateCard(updatedCard)
             history.push(`/decks/${deckId}`)
          }


        const handleCancel = () => {
            history.push(`/decks/${deckId}`) 
        }


    return (
    <>
        <div className="breacrumbs">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
            </ol>
        </nav>
        </div>
        <h1>Edit Card</h1>
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
                    defaultValue={card.front}
                   >
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
                    defaultValue={card.back}
                    >
                    </textarea>
                </div>
                <button type="button" className="btn btn-secondary mr-2" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary mr-2" >Submit</button>
            </form>

    </>
    )
}