import React from "react";
import { Card, Image, Divider } from "semantic-ui-react";

export default function GameComponent({ game }) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{game.gameTitle}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Image src={game.coverUrl} />
                <p>Generation {game.gen}</p>
                <p>Platform: {game.platform}</p>
            </Card.Content>
            <Card.Content>
                <Card.Header>
                    Tasks to Do
                </Card.Header>
            </Card.Content>
            <Card.Content>
                {/* The To Dos will go here */}
            </Card.Content>
            <Card.Content>
                <Card.Header>
                    Tasks Done
                </Card.Header>
            </Card.Content>
            <Card.Content>
                {/* The Dones will go here */}
            </Card.Content>
        </Card>
    )
}