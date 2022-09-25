import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import Game from "../../components/Game/Game";
import { Header, Divider, Grid } from "semantic-ui-react"
import AddGame from "../../components/AddGame/AddGame";

export default function Home({ loggedInUser, handleLogout }) {
    return (
        <>
            <PageHeader loggedInUser={loggedInUser} handleLogout={handleLogout} />
            <Header as="h1" textAlign="center">My Games</Header>
            <Divider inverted />
            <Grid centered>
                <Grid.Row>
            <AddGame />
            </Grid.Row>
            <Grid.Row>
            <Game />
            </Grid.Row>
            </Grid>
        </>
    )
}