import React, { useState,useEffect } from "react";
import { listDecks } from "../utils/api";
import { Link } from "react-router-dom";

export default function Home() {
     const [decks, setDecks] = useState([]);

  const loadDecks = () => {
    listDecks().then(setDecks)
  }

  useEffect(() => {
    loadDecks()

  }, []);

  return (
    <>
      <Link href="#" class="btn btn-secondary mb-3">
        <span class="oi oi-plus"></span> Create Deck</Link>
      {decks.map(deck => (
           <div class="card mb-3">
           <div class="card-body">
             <div className="row">
               <div className="col">
                 <h5 class="card-title">{deck.name}</h5>
               </div>
               <div className="col">
                 <p className="float-right">{deck.cards.length} cards</p>
               </div>
             </div>
             <p class="card-text">
               {deck.description}
             </p>
             <Link href="#" class="btn btn-secondary mr-2"><span class="oi oi-eye"></span> View</Link>
             <Link href="#" class="btn btn-primary"> <span class="oi oi-book"></span> Study</Link>
             <Link href="#" class="btn btn-danger float-right"><span class="oi oi-trash"></span> </Link>
           </div>
         </div>
      ))}
    </>
  );
}
