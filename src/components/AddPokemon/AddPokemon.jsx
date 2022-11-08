import React, { useState, useEffect } from "react";
import { Card, Image, Modal, Dropdown, Form, Button, Divider } from "semantic-ui-react";

export default function AddPokemon() {
    // So for this component I want to send a fetch call to the PokeAPI when the user types in a Pokemon's name and hits a button, and then the response will be used to fill in the data for the Pokemon such as image url, location, etc.
    // I want to dynamically populate dropdowns for various pieces of info, such as location because most Pokemon have multiple locations where they can be found. Will also need a dropdown for the relevant game the Pokemon is in to be selected(from the games that the user has added). With this being the case, I'll probably have to pass down the user's game info as well so I can access the IDs of the games. After the user has selected the information to their liking, they hit a confirm button to save the Pokemon to the server.
    // I'm going to need a function that prepares multi-word Pokemon for the fetch call by replacing white space with dashes. There's also the issue that for some Pokemon just their name isn't enough--for example Giratina must have either origin or altered attached to its name because it has two forms. 

    // ------------- States -------------
    const [pokemon, setPokemon] = useState('');
    const [newShiny, setNewShiny] = useState({}); // This is where the PokeAPI call's data will be stored prior to confirmation from the user
    const [shinyPic, setShinyPic] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/487.png")

    console.log(newShiny)

    // useEffect(() => {
    //     // Getting the games, C(R)UD
    //     const starter = grabAShiny()

    // }, []); // So this will run once the AddPokemon component loads

    function grabAShiny() {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
            .then((res) => {
                if (res.ok) return res.json();

                return res.json().then(response => {
                    console.log("Uh oh, this error log comes from Pokemon fetch", response);
                    throw new Error(response.err);
                })
            })
    }

    // async function loadShiny() {
    //     try {
    //         setPokemon("pikachu")
    //         const aShiny = await grabAShiny()
    //         setNewShiny(aShiny)
    //         setPokemon("")
    //     } catch (err) {
    //         console.log("Error in the loadShiny handler")
    //     }
    // }

    // ------------- Handlers -------------
    function handleChange(e) {
        setPokemon(e.target.value);
    }

    // This function is going to do the fetch call for whatever Pokemon the user types in
    async function handleGrab(e) {
        e.preventDefault();
        try {
            const aShiny = await grabAShiny();
            setNewShiny(aShiny)
            setShinyPic(aShiny.sprites.other.home["front_shiny"])
        }
        catch (err) {
            console.log("Error in the grabshiny handler")
        }
    }

    return (
        <>
            <Card>
                <Card.Content>
                    <Form>
                        <Form.Input
                            name="pokemon"
                            value={pokemon}
                            onChange={handleChange}
                        />
                        <Button onClick={handleGrab}>Find Pokemon!</Button>
                    </Form>
                    <Image src={shinyPic}/>
                </Card.Content>
            </Card>
        </>
    )
}