import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import AddPokemon from "../../components/AddPokemon/AddPokemon";

// This page will have several buttons, one will show the Pokemon the player is hunting when clicked, another will show the Pokemon the player has acquired when clicked.
// First all the shinies belonging to the player are fetched from the database, then they can be sorted by acquired or not and by game. Acquired or not is determined by a boolean. Shinies can be sorted into states that are then used in page display.
// Get Pokemon data and shiny pictures from PokeAPI, this will give nice consistency
// Various states store the shinies sorted in different ways, such as by acquired/not, by game, by national dex number, alphebetized, etc.

export default function Shinies() {

    // ------------- States -------------
    const [shinies, setShinies] = useState([]); // This stores ALL the shinies belonging to the user
    const [acquired, setAcquired] = useState([]); // This stores all acquired shinies belonging to the user
    const [hunt, setHunt] = useState([]); // This stores all shinies the user is still hunting

    // async function getShinies() {
    //     try {
    //         const response = await grabAShiny();
    //         setShinies([...response])
    //         console.log(shinies)
    //     }
    //     catch {
    //         console.log("Issues in getShinies");
    //     }
    // }

    // useEffect(() => {
    //     // Getting the games, C(R)UD
    //     getShinies();
    // }, []);
    

    return (
        <Container>
            <style>
                {`html, body {
                    background-image: linear-gradient(to right top, #a48dc0, #819cd0, #5caad0, #4eb4c2, #64baaa);

                    #modalHeader {
                        color: #7848C6
                    }
                }`}
            </style>
            <div>Hello there</div>
            <AddPokemon />
        </Container>
    )
}