import tokenService from "./tokenService";

const BASE_URL = "/api/tasks";

export function create(task, gameId) {
    return fetch(`${BASE_URL}/${gameId}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(task) // This is what you do when you don't have a photo to be messing with
    }).then((res) => {
        if (res.ok) return res.json(); // If the status code is in the 200s, we get an ok
        // Otherwise it'll return with an error
        return res.json().then(response => {
            console.log(response)
            throw new Error(response.err)
        })
    });
}