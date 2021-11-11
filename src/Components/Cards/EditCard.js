    //updateCard(updatedCard, signal)

    import { Link, useParams } from "react-router-dom"
    import React, { useState, useEffect } from "react";
    import { readDeck, readCard } from "../../utils/api"
    import Form from "./Form";
    
    export default function EditCard() {
        const {deckId, cardId } = useParams();
        const [deck, setDeck] = useState({cards: []});
        const [card, setCard] = useState({})
        const [front, setFront] = useState("");
        const [back, setBack] = useState("");
      
        useEffect(() => {
            readDeck(deckId).then(setDeck)
            readCard(cardId).then(setCard).then(setFront(card.front)).then(setBack(card.back))
            
          // eslint-disable-next-line 
          }, [deckId, cardId]);


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
        <Form />

    </>
    )
}