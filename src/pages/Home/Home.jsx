import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Header/Header";
import { Header, Divider, Grid, Container } from "semantic-ui-react"
import AddGame from "../../components/AddGame/AddGame";
import GameGallery from "../../components/GameGallery/GameGallery";
import * as gamesAPI from "../../utils/gamesApi";
import * as tasksAPI from "../../utils/tasksApi";

export default function Home({ handleLogout }) {

    // ------------- States -------------
    const [games, setGames] = useState([]);
    const [tasks, setTasks] = useState([]);


    // ------------- UseEffect -------------
    // This needs to render upon mount, and then render again whenever a new game is added by the user. This will be covering the R in CRUD

    // This is the getGames function that will be used by the useEffect
    async function getGames() {
        try {
            const response = await gamesAPI.getGames(); // Initiating the GET request, on to gamesApi in utils for the fetch part
            // And we're back wih the data from the fetch
            setGames([...response.data]);
        } catch (err) {
            console.log(err.message, "Issues in getGames");
        }
    }
    // Okay this is working now there was an aws thing that was getting in the way?? Now I need to give the games to the childe components that need them

    // Here's the useEffect
    useEffect(() => {
        // Getting the games, C(R)UD
        getGames();
    }, []); // So this will run once the Home component loads


    // ------------- Handlers -------------
    // So this is the function for adding a game that will be passed down to the AddGame component... This will cover the C in CRUD
    async function handleAddGame(game) {
        try {
            const response = await gamesAPI.create(game); // Here we make the API call, head over to utils/gamesApi to see what happens next
            // If it comes back successfully we then use setGames with the new response.data at the top
            getGames();
            // And we turn off loading
        } catch (err) {
            console.log("Error in the handleAddGame function: ", err);
        }
    }

    // This is the function that will delete a game and every task attached to it
    async function handleDeleteGame(gameId) {
        try {
            const response = await gamesAPI.deleteGame(gameId);
            getGames();
        } catch (err) {
            console.log("Error in the handleDeleteGame function");
        }
    }

    // This is for adding Tasks
    async function handleAddTask(task) {
        try {
            const response = await tasksAPI.create(task); // Go to utils/tasksApi to see what happens next
            // If it comes back successfully we then use setTasks with the new response.data at the top
            setTasks([response.data, ...tasks]);
            getGames();
        } catch (err) {
            console.log("Error in the AddTask function", err)
        }
    }

    // This is for deleting Tasks
    async function handleDeleteTask(task) {
        try {
            const response = await tasksAPI.deleteTask(task);
            console.log(response);
            getGames();
        } catch (err) {
            console.log("Error in handleDeleteTask");
        }
    }

    // These will mark a task as done or not done, depending on whether they have a true or false in their done key
    async function taskDone(task) {
        try {
            const response = await tasksAPI.markDone(task);
            setTasks([response.data]);
            getGames();
        } catch (err) {
            console.log("Error in the taskDone handler")
        }
    }


    // ------------- className Variables -------------
    const modalHeader = "modalHeader"
    const headerText = "headerText"


    // ------------- The Return -------------
    return (
        <Container>
            <style>
                {`html, body {
                    background-image: linear-gradient(to right top, #a48dc0, #819cd0, #5caad0, #4eb4c2, #64baaa);

                    #modalHeader {
                        color: #7848C6
                    }
                }`}
            </style>
            <PageHeader handleLogout={handleLogout} />
            <Header as="h1" textAlign="center">My Games</Header>
            <Divider inverted />
            <Grid>
                <Grid.Row centered>
                    {/* I want this to be accordion and/or have dropdown but first I need to make sure the API calls work for it */}
                    <AddGame handleAddGame={handleAddGame} />
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <GameGallery
                            games={games}
                            handleDeleteGame={handleDeleteGame}
                            handleAddTask={handleAddTask}
                            handleDeleteTask={handleDeleteTask}
                            taskDone={taskDone}
                            itemsPerRow={3}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}