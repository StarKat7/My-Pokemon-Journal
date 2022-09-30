import React, { useState } from "react";
import { Card, Modal, Dropdown, Form, Button, Divider } from "semantic-ui-react";


// ------------- Games for the Dropdown -------------
// Gotta figure this out... Semantic UI has a certain way of doing it that I have to figure out how to use.
// Actually I'll start with allowing it to be self-entered, then figure out the dropdowns later. Just make sure the form WORKS before you get fancy with it!
// Back to figure out the dropdown... If selecting a game just changes the state, that would work wouldn't it? Let's try it out...
const availableGames = [
    { title: "Pokemon Sword", gen: 8, coverUrl: "https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_sword_shield/where-to-buy-sword-169-en.jpg", platform: "Nintendo Switch" },
    { title: "Pokemon Shield", gen: 8, coverUrl: "https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_sword_shield/where-to-buy-shield-169-en.jpg", platform: "Nintendo Switch" },
    { title: "Pokemon Legends: Arceus", gen: 8, coverUrl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_legends_arceus/pokemon-legends-arceus-box-art-en.jpg", platform: "Nintendo Switch" },
    { title: "Pokemon Sun", gen: 7, coverUrl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sun_moon/slider-solgaleo.jpg", platform: "3DS" },
    { title: "Pokemon Moon", gen: 7, coverUrl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_sun_moon/slider-lunala.jpg", platform: "3DS" },
    { title: "Pokemon UltraSun", gen: 7, coverUrl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_ultra_sun_ultra_moon/art/pcom-sorghselrkjhgserjgt-slider-01.jpg", platform: "3DS" },
    { title: "Pokemon UltraMoon", gen: 7, coverUrl: "https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_ultra_sun_ultra_moon/art/pcom-sorghselrkjhgserjgt-slider-02.jpg", platform: "3DS" },
]

// So I have to use these in the actual dropdown element, and then I can match the game's name to the title and change the state?
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
    const [gameForm, setGameForm] = useState({
        title: "",
        coverUrl: "",
        gen: "",
        platform: ""
    });
    const [open, setOpen] = useState(false);

    // ------------- Handlers -------------
    function handleChange(e) {
        setGameForm({
            ...gameForm,
            [e.target.name]: e.target.value,
        });
    }

    function handleClose(e, data) {
        // So I think I can use .find() to use the option's name to find the availableGame with the corresponding name? Then set the state... Let's give it a try.
        const selectedGame = availableGames.find(({title}) => title === data.value);
        // console.log(selectedGame);
        // Okay successfully grabbed the game from the availableGames array...
        setGameForm(selectedGame);
        // IT WORKED??
    }

    function handleSubmit(e) {
        e.preventDefault();
        const requestData = gameForm;
        // Put the handleAddGame here, may define in a parent and pass it down
        // Actually yeah I need the Home page to rerender when the game is added so define handleAddGame() above and then pass it down to here
        handleAddGame(requestData); // This is what gets sent over to the server, remember that handleAddGame is calling a function from the gamesAPI util
        setOpen(false);
        setGameForm({
            title: "",
            coverUrl: "",
            gen: "",
            platform: ""
        })
    }


    // ------------- The Return -------------
    return (
        <Card>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button size="large">Add New Game</Button>}
            >
                <Modal.Header>Add Game</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Dropdown
                            placeholder="Select a Game Title"
                            fluid
                            selection
                            options={gameOptions}
                            onChange={handleClose}
                        />
                        <Divider inverted />
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
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Maybe Not...
                    </Button>
                </Modal.Actions>
            </Modal>
        </Card>
    )
}