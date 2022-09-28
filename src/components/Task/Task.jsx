import React, { useState } from "react";
import { Segment, Header, Button, Form } from "semantic-ui-react";

export default function Task({ task, taskDone }) {

    const [thisTask, setThisTask] = useState(task);

    console.log("looking at thisTask in the Task Component", thisTask)

    function handleMark(e) {
        e.preventDefault();
        setThisTask({
            ...thisTask,
            isDone: true
        });
        const requestData = task;
        taskDone(requestData);
        console.log("Looking at requestData after button click", requestData)
    }

    // So I have to make it so the button only renders if the isDone key is set to false

    return (
        <Segment>
            <Header>{task.taskTitle}</Header>
            <p>{task.taskDescription}</p>
            {task.isDone ? null : <Form onSubmit={handleMark}><Button type="submit">Done</Button></Form>}
        </Segment>
    )
}