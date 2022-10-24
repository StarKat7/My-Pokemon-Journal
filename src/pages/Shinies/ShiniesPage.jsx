import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

export default function Shinies() {

    // ------------- States -------------
    const [shinies, setShinies] = useState([]);
    const [acquired, setAcquired] = useState([]);
    const [hunt, setHunt] = useState([]);

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
            <div>Hello there</div>
            </Container>
    )
}