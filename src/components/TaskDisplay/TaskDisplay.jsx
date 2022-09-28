import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";
import Task from "../Task/Task";

export default function TaskDisplay({ game, taskDone }) {

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
                                taskDone={taskDone}
                            />
                    )
                })}
            <Header>Tasks Done</Header>
            {tasksDoneArray.map((task) => {
                    return (
                            <Task
                                task={task}
                                key={task._id}
                                taskDone={taskDone}
                            />
                    )
                })}
        </Segment>
    )
}