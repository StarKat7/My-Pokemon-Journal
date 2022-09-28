import React, { useState } from "react";
import { Card, Image, Modal, Header, Button, Segment } from "semantic-ui-react";
import AddTask from "../AddTask/AddTask";
import TaskDisplay from "../TaskDisplay/TaskDisplay";

export default function GameComponent({ game, handleAddTask, taskDone }) {

    // ------------- States -------------
    const [open, setOpen] = useState(false);


    return (
        <Card >
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button size="large">{game.gameTitle}</Button>}
            >
                <Modal.Header centered>{game.gameTitle} Details</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Segment textAlign="center">
                            <Image centered src={game.coverUrl} />
                            <p>Generation {game.gen}</p>
                            <p>Platform: {game.platform}</p>
                        </Segment>
                        <TaskDisplay game={game} taskDone={taskDone} />
                        <AddTask game={game} handleAddTask={handleAddTask} />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Done
                    </Button>
                </Modal.Actions>
            </Modal>
            <Card.Content textAlign="center">
                <Image src={game.coverUrl} />
                <p>Generation {game.gen}</p>
                <p>Platform: {game.platform}</p>
            </Card.Content>
        </Card>
    )
}