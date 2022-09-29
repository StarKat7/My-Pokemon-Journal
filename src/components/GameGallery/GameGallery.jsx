import React from "react";
import { Card } from "semantic-ui-react";
import GameComponent from "../Game/Game";

export default function GameGallery({ games, itemsPerRow, handleAddTask, taskDone, handleDeleteGame }) {
    return (
        <>
            <Card.Group itemsPerRow={itemsPerRow} stackable>
                {/* This will be a .map of all the games attached to the user */}
                {games.map((game) => {
                    return (
                            <GameComponent
                                game={game}
                                key={game._id}
                                handleDeleteGame={handleDeleteGame}
                                handleAddTask={handleAddTask}
                                taskDone={taskDone}
                            />
                    )
                })}
            </Card.Group>
        </>
    )
}