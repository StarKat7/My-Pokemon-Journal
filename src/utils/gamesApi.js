import tokenService from "./tokenService";

const BASE_URL = "/api/games";

// So this is where the fetch calls are made for the games routes

export function create(game) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(game) // This is what you do when you don't have a photo to be messing with
    }).then((res) => {
        if (res.ok) return res.json(); // If the status code is in the 200s, we get an ok
        // Otherwise it'll return with an error
        return res.json().then(response => {
            console.log(response)
            throw new Error(response.err)
        })
    });
}

export function getGames() {
    // Okay so I need to grab ONLY the games that belong to the user... Okay so I specify that in the controllers...? Do I have to do it in the users controller or in the games controller? ...I think in users?
    return fetch(BASE_URL, {
        headers: {
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then((res) => {
        if(res.ok) return res.json();

        return res.json().then(response => {
            console.log("Uh oh, this error log comes from gamesApi.js", response);
            throw new Error(response.err);
        })
    })
}