import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";

export default function TaskDisplay(props) {
    return (
        <Segment>
            <Header>Tasks to Do</Header>
            <Header>Tasks Done</Header>
        </Segment>
    )
}