import React, { useState } from "react";
import { Card, Accordion, Dropdown, Form, Button } from "semantic-ui-react";


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
    { key: "Arceus", text: "Pokemon Legends: Arceus", value: "Pokemon Legends: Arceus" },
    { key: "Sun", text: "Pokemon Sun", value: "Pokemon Sun" },
    { key: "Moon", text: "Pokemon Moon", value: "Pokemon Moon" },
    { key: "UltraSun", text: "Pokemon UltraSun", value: "Pokemon UltraSun" },
    { key: "UltraMoon", text: "Pokemon UltraMoon", value: "Pokemon UltraMoon" }
]

export default function AddGame({ handleAddGame }) {
    // AddGame will be a form that is rendered on the Home page, accordian so it only pops out when the user needs it.
    // ------------- States -------------
    const [dropdownGame, setDropdownGame] = useState({})
    const [gameForm, setGameForm] = useState({
        title: "",
        coverUrl: "",
        gen: "",
        platform: ""
    })

    // ------------- Handlers -------------
    function handleChange(e) {
        setGameForm({
            ...gameForm,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const requestData = gameForm;
        // Put the handleAddGame here, may define in a parent and pass it down
        // Actually yeah I need the Home page to rerender when the game is added so define handleAddGame() above and then pass it down to here
        handleAddGame(requestData); // This is what gets sent over to the server, remember that handleAddGame is calling a function from the gamesAPI util
    }


    // ------------- The Return -------------
    return (
        <Card>
            <Card.Content header='Add New Game' textAlign="center" />
            <Card.Content textAlign="left">
                {/* <Dropdown
                    placeholder="Select Game"
                    fluid
                    selection options={gameOptions}
                />
                I'll get to you later, once I know the form works. */}
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        name="title"
                        value={gameForm.title}
                        placeholder="Game Title"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="coverUrl"
                        value={gameForm.coverUrl}
                        placeholder="Game Cover Art URL Here"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="gen"
                        value={gameForm.gen}
                        placeholder="Generation"
                        onChange={handleChange}
                    />
                    <Form.Input
                        name="platform"
                        value={gameForm.platform}
                        placeholder="Platform"
                        onChange={handleChange}
                    />
                    <Button type="submit" className="btn">Add Game</Button>
                </Form>
            </Card.Content>
        </Card>
    )
}