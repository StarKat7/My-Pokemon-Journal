import React from "react";
import { Card, Accordion, Grid, Segment } from "semantic-ui-react";

export default function AddGame(props) {
    // AddGame will be a form that is rendered on the Home page, accordian so it only pops out when the user needs it.
    return (
        <Card>
            <Card.Content header='Add New Game' textAlign="center" />
            <Card.Content textAlign="left">
                <p>Game Title, this is where the user will select the game from a dropdown and most of the other slots will be filled in automatically</p>
                <p>Cover Art Here</p>
                <p>Generation</p>
                <p>Platform</p>
            </Card.Content>
            <Card.Content extra>
                Fist Task made here.
            </Card.Content>
        </Card>
    )
}