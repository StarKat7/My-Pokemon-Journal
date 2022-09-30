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
        console.log(request, "<- the deleteGame request")
        handleDeleteGame(request);
        setOpen(false)
    }


    // ------------- The Return -------------
    return (
        <Card >
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button size="large">{game.gameTitle}</Button>}
            >
                <Modal.Header centered="true">{game.gameTitle} Details
                </Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description>


                        <Segment textAlign="center">
                            <Image centered={true} src={game.coverUrl} />
                            <p>Generation {game.gen}</p>
                            <p>Platform: {game.platform}</p>
                        </Segment>
                        <TaskDisplay
                            game={game}
                            taskDone={taskDone}
                            handleDeleteTask={handleDeleteTask}
                        />
                        <AddTask
                            game={game}
                            handleAddTask={handleAddTask}
                        />
                        <Form onSubmit={handleSubmit} >
                            <Button type="submit" color="red">Delete Game</Button>
                        </Form>
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