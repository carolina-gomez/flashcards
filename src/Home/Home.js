import React from "react";
import { Switch, Route, useEffect, useState } from "react-router-dom";
import { listDecks } from "../utils/api";

export default function Home() {
    const [decks, setDecks] = useState([]);

    useEffect(( ) => {
        async function loadDecks() {
        listDecks().then(data => setDecks(data))
        }

        loadDecks();
    }, []);

  return (
    <>
      <Switch>
        <Route>
            <button>Create Deck</button>
        </Route>
      </Switch>
    </>
  );
}
