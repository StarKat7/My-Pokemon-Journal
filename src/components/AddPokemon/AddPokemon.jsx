import React, { useState } from "react";
import { Card, Image, Modal, Dropdown, Form, Button, Divider } from "semantic-ui-react";

export default function AddPokemon() {
    // So for this component I want to send a fetch call to the PokeAPI when the user types in a Pokemon's name, and then the response will be used to fill in the data for the Pokemon such as image url, location, etc.
    //  I want to dynamically populate dropdowns for various pieces of info, such as location because most Pokemon have multiple locations where they can be found. Will also need a dropdown for the relevant game the Pokemon is in to be selected(from the games that the user has added). With this being the case, I'll probably have to pass down the user's game info as well so I can access the IDs of the games.

    // ------------- States -------------
    const [pokemon, setPokemon] = useState({})


    function grabAShiny() {
        return fetch('https://pokeapi.co/api/v2/pokemon/giratina-altered')
            .then((res) => {
                if (res.ok) return res.json();

                return res.json().then(response => {
                    console.log("Uh oh, this error log comes from Pokemon fetch", response);
                    throw new Error(response.err);
                })
            })
    }

    // This function is going to do the fetch call for whatever Pokemon the user types in
    function handleGrab(e) {
        e.preventDefault();

    }

    return (
        <>
            <Card>
                <Card.Content>
                    <Form>
                        <Form.Input />
                        <Button onClick={handleGrab}>Find Pokemon!</Button>
                    </Form>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/487.png"></Image>
                </Card.Content>
            </Card>
        </>
    )
}