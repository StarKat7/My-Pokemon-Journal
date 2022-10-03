import React, { useState } from "react";
import { Card, Image, Modal, Form, Button, Segment } from "semantic-ui-react";
import AddTask from "../AddTask/AddTask";
import TaskDisplay from "../TaskDisplay/TaskDisplay";

export default function GameComponent({ game, handleAddTask, taskDone, handleDeleteGame, handleDeleteTask }) {

    // ------------- States -------------
    const [open, setOpen] = useState(false);


    // ------------- Handlers -------------
    function handleSubmit(e) {
        e.preventDefault();
        const request = game._id;
        handleDeleteGame(request);
        setOpen(false)
    }


    // ------------- The Return -------------
    return (
        <Card color="grey">
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button size="large" color="violet">{game.gameTitle}</Button>}
            >
                <Modal.Header>{game.gameTitle} Details
                </Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description>
                        <Segment textAlign="center">
                            <Image centered={true} src={game.coverUrl} />
                            <p>Generation {game.gen}</p>
                            <p>Platform: {game.platform}</p>
                        </Segment>
                        <Form onSubmit={handleSubmit} >
                            <Button type="submit" color="red">Delete Game</Button>
                        </Form>
                        <TaskDisplay
                            game={game}
                            taskDone={taskDone}
                            handleDeleteTask={handleDeleteTask}
                        />
                        <AddTask
                            game={game}
                            handleAddTask={handleAddTask}
                        />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Done
                    </Button>
                </Modal.Actions>
            </Modal>
            <Card.Content textAlign="center" color="grey">
                <Image src={game.coverUrl} />
                <p>Generation {game.gen}</p>
                <p>Platform: {game.platform}</p>
            </Card.Content>
        </Card>
    )
}