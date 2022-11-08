import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import GamePage from "../GamePage/GamePage";
import Home from "../Home/Home";
import Shinies from "../Shinies/ShiniesPage";
import userService from "../../utils/userService";
import * as gamesAPI from "../../utils/gamesApi";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [games, setGames] = useState([]);

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  async function getGames() {
    try {
        const response = await gamesAPI.getGames(); // Initiating the GET request, on to gamesApi in utils for the fetch part
        // And we're back wih the data from the fetch
        setGames([...response.data]);
    } catch (err) {
        console.log(err.message, "Issues in getGames");
    }
}

  if (user) {
    // If the user is logged in:
    return (
      <Routes>
        <Route
          path="/"
          element={<Home loggedInUser={user} handleLogout={handleLogout} getGames={getGames} games={games} />} />
        <Route
          path="/shinies"
          element={<Shinies loggedInUser={user} handleLogout={handleLogout} getGames={getGames} games={games} />}
        Route/>
        <Route
          path="/:_id"
          element={<GamePage loggedInUser={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

  // If the user is not logged in:
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
