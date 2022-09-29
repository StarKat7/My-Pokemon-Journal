import React, { useState } from "react";
import { Form, Button, Header, Segment } from "semantic-ui-react";

export default function AddTask({ game, handleAddTask }) {
    // console.log(game, " game object in AddTask")

    const gameTitle = game.gameTitle;
    const gameId = game._id;
    const userId = game.user;


    // ------------- States -------------
    const [taskForm, setTaskForm] = useState({
        game: gameTitle,
        user: userId,
        gameId: gameId,
        title: "",
        description: "",
        done: false
    })


    // ------------- Handlers -------------
    function handleChange(e) {
        setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const requestData = taskForm;
        // Put the handleAddGame here, may define in a parent and pass it down
        // Actually yeah I need the Home page to rerender when the game is added so define handleAddGame() above and then pass it down to here
        handleAddTask(requestData); // This is what gets sent over to the server, remember that handleAddGame is calling a function from the gamesAPI util
        setTaskForm({
            game: gameTitle,
            user: userId,
            gameId: gameId,
            title: "",
            description: "",
            done: false
        })
    }
    

    // ------------- The Return -------------
    return (
        <Segment>
            <Header>Add a Task for {gameTitle}</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    name="title"
                    value={taskForm.title}
                    placeholder="Task Title"
                    onChange={handleChange}
                />
                <Form.TextArea
                    name="description"
                    value={taskForm.description}
                    placeholder="Description"
                    onChange={handleChange}
                />
                <Button type="submit" className="btn">Add Task</Button>
            </Form>
        </Segment>
    )
}