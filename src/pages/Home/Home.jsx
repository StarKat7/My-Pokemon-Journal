import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import { Header, Divider, Grid } from "semantic-ui-react"
import AddGame from "../../components/AddGame/AddGame";
import GameGallery from "../../components/GameGallery/GameGallery";
import * as gamesAPI from "../../utils/gamesApi";

export default function Home({ loggedInUser, handleLogout }) {

    // ------------- States -------------
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // ------------- UseEffect -------------
    // This needs to render upon mount, and then render again whenever a new game is added by the user. This will be covering the R in CRUD


    // This is the getGames function that will be used by the useEffect
    async function getGames() {
        try {
            const response = await gamesAPI.getGames(); // Initiating the GET request, on to gamesApi in utils for the fetch part
            console.log(response, "<- the data");
            setGames([...response.data]);
            setLoading(false);
        } catch(err) {
            console.log(err.message, "Issues in getGames");
            setLoading(false);
        }
    }

    // ------------- Handlers -------------
    // So this is the function for adding a game that will be passed down to the AddGame component... This will cover the C in CRUD
    async function handleAddGame(game) {
        try {
            setLoading(true);
            const response = await gamesAPI.create(game); // Here we make the API call, head over to utils/gamesApi to see what happens next
            // If it comes back successfully we then use setGames with the new response.data at the top
            console.log(response);
            setGames([response.data, ...games]);
            // And we turn off loading
            setLoading(false);
        } catch (err) {
            console.log("Error in the handleAddGame function: ", err);
        }
    }

    // ------------- The Return -------------
    return (
        <>
            <PageHeader loggedInUser={loggedInUser} handleLogout={handleLogout} />
            <Header as="h1" textAlign="center">My Games</Header>
            <Divider inverted />
            <Grid centered>
                <Grid.Row>
                    {/* I want this to be accordion and/or have dropdown but first I need to make sure the API calls work for it */}
                    <AddGame handleAddGame={handleAddGame} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <GameGallery />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}