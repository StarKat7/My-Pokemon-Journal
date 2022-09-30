import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

export default function PageHeader({ handleLogout }) {

  // ------------- The Return -------------
  return (
    <Segment clearing>
      <Header as="h2" floated="left">
        <Link to="/">
          My Pokemon Journal
        </Link>

      </Header>
      <Header as="h2" floated="right" color="violet">
        <Link to="" onClick={handleLogout} >
          Logout
        </Link>
      </Header>
    </Segment>
  );
}
