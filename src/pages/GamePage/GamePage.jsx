import React from "react";
import PageHeader from "../../components/Header/Header";
import GameComponent from "../../components/Game/Game";

export default function GamePage(props) {
    return (
        <>
        <PageHeader />
        <h1>Game page rendering</h1>
        <GameComponent />
        </>
    )
}