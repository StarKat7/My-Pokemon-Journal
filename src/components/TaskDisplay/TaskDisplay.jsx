import React from "react";
import { Segment, Header } from "semantic-ui-react";
import Task from "../Task/Task";

export default function TaskDisplay({ game, taskDone, handleDeleteTask }) {

    const tasksToDoArray = game.tasksToDo;
    const tasksDoneArray = game.tasksDone;


    // ------------- The Return -------------
    return (
        <Segment>
            <Header>Tasks to Do</Header>
            {tasksToDoArray.map((task) => {
                return (
                    <Task
                        task={task}
                        key={task._id}
                        taskDone={taskDone}
                        handleDeleteTask={handleDeleteTask}
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
                        handleDeleteTask={handleDeleteTask}
                    />
                )
            })}
        </Segment>
    )
}