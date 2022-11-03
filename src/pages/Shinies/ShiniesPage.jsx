import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import AddPokemon from "../../components/AddPokemon/AddPokemon";

export default function Shinies() {

    // ------------- States -------------
    const [shinies, setShinies] = useState([]); // This stores ALL the shinies belonging to the user
    const [acquired, setAcquired] = useState([]); // This stores all acquired shinies belonging to the user
    const [hunt, setHunt] = useState([]); // This stores all shinies the user is still hunting
    const [newShiny, setNewShiny] = useState({}); // This is where the PokeAPI call's data will be stored prior to confirmation from the user

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