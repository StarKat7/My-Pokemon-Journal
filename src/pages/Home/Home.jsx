import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import Game from "../../components/Game/Game";

export default function Home({ loggedInUser, handleLogout }) {
    return (
        <>
            <PageHeader loggedInUser={loggedInUser} handleLogout={handleLogout} />
            <h1>My Games at a Glance, from the Home Page now</h1>
            <Game />
        </>
    )
}