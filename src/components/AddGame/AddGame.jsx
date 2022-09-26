import React, { useState } from "react";
import { Card, Accordion, Grid, Segment, Dropdown, Form } from "semantic-ui-react";


// ------------- Games for the Dropdown -------------
// Gotta figure this out... Semantic UI has a certain way of doing it that I have to figure out how to use.
// Actually I'll start with allowing it to be self-entered, then figure out the dropdowns later. Just make sure the form WORKS before you get fancy with it!
const availableGames = [
    { gameTitle: "Pokemon Sword", gen: 8, coverurl: "https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_sword_shield/where-to-buy-sword-169-en.jpg", platform: "Nintendo Switch" },
    { gameTitle: "Pokemon Shield", gen: 8, coverurl: "https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_sword_shield/where-to-buy-shield-169-en.jpg", platform: "Nintendo Switch" },
    { gameTitle: "Pokemon Legends: Arceus", gen: 8, coverurl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_legends_arceus/pokemon-legends-arceus-box-art-en.jpg", platform: "Nintendo Switch" },
    { gameTitle: "Pokemon Sun", gen: 7, coverurl: "", platform: "3DS" },
    { gameTitle: "Pokemon Moon", gen: 7, coverurl: "", platform: "3DS" },
    { gameTitle: "Pokemon UltraSun", gen: 7, coverurl: "", platform: "3DS" },
    { gameTitle: "Pokemon UltraMoon", gen: 7, coverurl: "", platform: "3DS" },
]

const gameOptions = [
    { key: "Sword", text: "Pokemon Sword", value: "Pokemon Sword" },
    { key: "Shield", text: "Pokemon Shield", value: "Pokemon Shield" },
    { key: "Arceus", text: "Pokemon Legends: Arceus", value: "Pokemon Legends: Arceus"},
    { key: "Sun", text: "Pokemon Sun", value: "Pokemon Sun"},
    { key: "Moon", text: "Pokemon Moon", value: "Pokemon Moon"},
    { key: "UltraSun", text: "Pokemon UltraSun", value: "Pokemon UltraSun"},
    { key: "UltraMoon", text: "Pokemon UltraMoon", value: "Pokemon UltraMoon"}
]

export default function AddGame(props) {
    // AddGame will be a form that is rendered on the Home page, accordian so it only pops out when the user needs it.
    // ------------- States -------------
    const [dropdownGame, setDropdownGame] = useState({})
    const [game, setGame] = useState({
        title: "",
        gen: null,
        coverUrl: "",
        platform: "",
        task: ""
    })

    // ------------- Handlers -------------
    function handleChange(e) {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const requestData = game;
        // Put the handleAddGame here, may define in a parent and pass it down
        // Actually yeah I need the Home page to rerender when the game is added so define handleAddGame() above and then pass it down to here
    }


    return (
        <Card>
            <Card.Content header='Add New Game' textAlign="center" />
            <Card.Content textAlign="left">
                <Dropdown
                    placeholder="Select Game"
                    fluid
                    selection options={gameOptions}
                />
                <p>Game Title, this is where the user will select the game from a dropdown and most of the other slots will be filled in automatically</p>
                <p>Cover Art Here</p>
                <p>Generation</p>
                <p>Platform</p>
            </Card.Content>
            <Card.Content extra>
                First Task made here.
            </Card.Content>
        </Card>
    )
}