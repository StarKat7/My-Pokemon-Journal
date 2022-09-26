import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import Game from "../../components/Game/Game";
import { Header, Divider, Grid } from "semantic-ui-react"
import AddGame from "../../components/AddGame/AddGame";
import GameGallery from "../../components/GameGallery/GameGallery";

export default function Home({ loggedInUser, handleLogout }) {

    // ------------- States -------------
    const [games, setGames] = useState([]);

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