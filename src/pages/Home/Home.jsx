import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import { Header, Divider, Grid } from "semantic-ui-react"
import AddGame from "../../components/AddGame/AddGame";
import GameGallery from "../../components/GameGallery/GameGallery";
import gamesAPI from "../../utils/gamesApi";

export default function Home({ loggedInUser, handleLogout }) {

    // ------------- States -------------
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // ------------- UseEffect -------------
    // This needs to render upon mount, and then render again whenever a new game is added by the user. This will be covering the R in CRUD

    // ------------- Handlers -------------
    // So this is the function for adding a game that will be passed down to the AddGame component... This will cover the C in CRUD
    async function handleAddGame(game) {
        try {
            setLoading(true);
            const response = await gamesAPI.create(game);
        } catch(err) {
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
                    <AddGame />
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