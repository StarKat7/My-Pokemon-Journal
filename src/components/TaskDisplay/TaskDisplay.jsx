import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";
import Task from "../Task/Task";

export default function TaskDisplay({ game }) {

    const tasksToDoArray = game.tasksToDo;
    const tasksDoneArray = game.tasksDone;

    return (
        <Segment>
            <Header>Tasks to Do</Header>
            {tasksToDoArray.map((task) => {
                    return (
                            <Task
                                task={task}
                                key={task._id}
                            />
                    )
                })}
            <Header>Tasks Done</Header>
            {tasksDoneArray.map((task) => {
                    return (
                            <Task
                                task={task}
                                key={task._id}
                            />
                    )
                })}
        </Segment>
    )
}