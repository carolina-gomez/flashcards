 import React, { useState } from "react";
 import { listDecks } from "../utils/api";

export default function Home() {
  const [decks, setDecks] = useState([]);

// function loadDecks() {
//   listDecks().then(setDecks)
// }

const loadDecks = () => {
  listDecks().then(setDecks)
}

  // return (
  //   <>
  //     <button>Create Deck</button>
  //     <div>
  //       <fieldset>
  //         <h3>Deck Name</h3>
  //         <p> # cards</p>
  //         <p>This would be the deck description</p>
  //         <div>
  //           <button>View</button>
  //           <button>Study</button>
  //           <button>Trash</button>
  //         </div>
  //       </fieldset>
  //     </div>
  //   </>
  // );

  return (
    <button>Hello?</button>
  )
}
