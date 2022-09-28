import tokenService from "./tokenService";

const BASE_URL = "/api/tasks";

export function create(task) {
    console.log("Looking at task object in fetch call", task)
    return fetch(BASE_URL, {
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
            console.log("The response was not ok", response)
            throw new Error(response.err)
        })
    });
}

export function markDone(task) {
    return fetch(`${BASE_URL}/${task._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(task)
    }).then((res) => {
        if (res.ok) return res.json();

        return res.json().then(response => {
            console.log("The markDone response was not ok", response);
            throw new Error(response.err);
        })
    })
}