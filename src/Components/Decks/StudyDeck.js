import { Link, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api"

export default function StudyDeck() {
    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards: []});
    // const [side, setSide] = useState("front")
    // const [currentCard, setCurrentCard] = useState(0)
    const [cards, setCards] = useState([]);


    const loadDeck = () => {
      readDeck(deckId).then(setDeck)
      setCards(deck.cards)
    }
  
    useEffect(() => {
        loadDeck()
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [deck.id]);

    


   // console.log(cards)

    return (
        <>
        <div className="breacrumbs">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
        </div>
        <h1>Study: {deck.name}</h1>
             {cards.map((card, index) => (
                        <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 class="card-title">Card {index + 1} of {cards.length}</h5>
                                </div>
                            </div>
                            <p className="card-text">
                                {card.front}
                            </p>
                            <button type="button" className="btn btn-secondary" >Flip</button>
                        </div>
                        </div>
             ))}
            </>
    )
}