import React, { useState } from "react";
import { Segment, Header, Button, Form } from "semantic-ui-react";

export default function Task({ task, taskDone, handleDeleteTask }) {

    const [thisTask, setThisTask] = useState(task);

    console.log("looking at thisTask in the Task Component", thisTask);

    function handleClick() {
        setThisTask({
            ...thisTask,
            isDone: true
        });
    }

    function handleMark(e) {
        e.preventDefault();
        const responseData = thisTask;
        console.log("Looking at responseData after button click", responseData)
        taskDone(responseData);
    }

    function handleDelete(e) {
        e.preventDefault();
        const responseData = thisTask._id;
        handleDeleteTask(responseData);
    }

    // So I have to make it so the button only renders if the isDone key is set to false

    return (
        <Segment>
            <Header>{task.taskTitle}</Header>
            <p>{task.taskDescription}</p>
            {task.isDone ? null : <Form onSubmit={handleMark}><Button type="submit" floated="right" onClick={handleClick}>Done</Button></Form>}
            <Form onSubmit={handleDelete}><Button type="submit">Delete Task</Button></Form>
        </Segment>
    )
}