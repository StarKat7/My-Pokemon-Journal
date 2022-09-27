import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";

export default function Task({task}) {
    
    if (!task) {
        return (
            <Segment>
                <p>No tasks yet...</p>
            </Segment>
        )
    }

    return (
        <Segment>
            <Header>{task.taskTitle}</Header>
            <p>{task.taskDescription}</p>
        </Segment>
    )
}