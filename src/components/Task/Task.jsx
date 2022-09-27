import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";

export default function Task({task}) {
    

    return (
        <Segment>
            <Header>{task.taskTitle}</Header>
            <p>{task.taskDescription}</p>
        </Segment>
    )
}