import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

export default function PageHeader({ loggedUser, handleLogout }) {
    console.log(loggedUser, "loggedUser in header");
    return (
      <Segment clearing>
        <Header as="h2" floated="left">
          <Link to="/">
            <Icon name="home"></Icon>
          </Link>
        </Header>
        <Header as="h2" floated="right">
          <Link to="" onClick={handleLogout}>
            Logout
          </Link>
          </Header>
      </Segment>
    );
  }
  