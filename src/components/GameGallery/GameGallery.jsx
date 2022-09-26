import React from "react";
import { Card } from "semantic-ui-react";
import GameComponent from "../Game/Game";

export default function GameGallery(props) {
    return (
        <>
        <h1>Showing all games as cards</h1>
        {/* This will be a .map of all the games attached to the user */}
        <GameComponent />
        </>
    )
}