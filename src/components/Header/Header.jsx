import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

export default function PageHeader({ loggedUser, handleLogout }) {
    return (
      <Segment clearing>
        <Header as="h2" floated="left">
          <Link to="/">
            <Icon name="home" color="purple"></Icon>
          </Link>
        </Header>
        <Header as="h2" floated="right" color="purple">
          <Link to="" onClick={handleLogout} >
            Logout
          </Link>
          </Header>
      </Segment>
    );
  }
  