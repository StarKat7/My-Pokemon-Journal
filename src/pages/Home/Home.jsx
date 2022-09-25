import React, { useState } from "react";
import PageHeader from "../../components/Header/Header";
import Game from "../Game/Game";

export default function Home({loggedInUser}) {
    return (
        <>
        <PageHeader loggedInUser={loggedInUser} />
        <h1>My Games at a Glance, from the Home Page now</h1>
        <Game />
        </>
    )
}