import { Link, useParams } from "react-router-dom"
import React, { useState,useEffect } from "react";
import { readDeck } from "../../utils/api"

export default function StudyDeck() {
    const params = useParams();
    const [deck, setDeck] = useState({cards: []});
    const [cards, setCards] = useState([]);

    const loadDeck = () => {
      readDeck(params.deckId).then(setDeck)
      setCards(deck.cards)
    }
  
    useEffect(() => {
      loadDeck()
  
    }, []);

    console.log(cards)

    return (
        <>
        <div className="breacrumbs">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"><span class="oi oi-home"></span> Home</Link></li>
                    <li class="breadcrumb-item"><Link to="#">{deck.name}</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
        </div>
        <h1>Study: {deck.name}</h1>
             {cards.map((card, index) => (
                        <div class="card mb-3">
                        <div class="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 class="card-title">Card {index + 1} of {cards.length}</h5>
                                </div>
                            </div>
                            <p class="card-text">
                                {card.front}
                            </p>
                            <Link to="#" class="btn btn-secondary mr-2"> Flip</Link>
                        </div>
                        </div>
             ))}
            </>
    )
}