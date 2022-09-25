import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import Game from "../../components/Game/Game";
import { Header } from "semantic-ui-react"

export default function Home({ loggedInUser, handleLogout }) {
    return (
        <>
            <PageHeader loggedInUser={loggedInUser} handleLogout={handleLogout} />
            <Header as="h1" textAlign="center">My Games</Header>
            <div className="ui section divider"></div>
            <Game />
        </>
    )
}