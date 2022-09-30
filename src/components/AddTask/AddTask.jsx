import React, { useState } from "react";
import { Form, Button, Header, Segment, Dropdown, Divider } from "semantic-ui-react";


// Task info for state change
const availableTasks = [
    { title: "Champion", description: "Defeat the Pokemon League and become the Champion"},
    { title: "Cover Legendary", description: "Catch the cover legendary of the game"},
    { title: "Gym Challenge", description: "Defeat all 8 Gyms"}
]

// Options for the dropdown
const taskOptions = [
    { key: "Champion", text: "Champion", value: "Champion"},
    { key: "Legendary", text: "Cover Legendary", value: "Cover Legendary"},
    { key: "Gyms", text: "Gym Challenge", value: "Gym Challenge"}
]


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

    function handleClose(e, data) {
        // So I think I can use .find() to use the option's name to find the availableGame with the corresponding name? Then set the state... Let's give it a try.
        const selectedTask = availableTasks.find(({title}) => title === data.value);
        // Okay successfully grabbed the game from the availableGames array...
        setTaskForm({...taskForm, title: selectedTask.title, description: selectedTask.description});
        console.log(taskForm)
        // IT WORKED??
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
            <Dropdown
                placeholder="Select a Default Task if you need a little inspiration"
                fluid
                selection
                options={taskOptions}
                onChange={handleClose}
            />
            <Divider inverted />
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