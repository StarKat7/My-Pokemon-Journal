import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Segment, Message } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";


function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage({ handleSignUpOrLogin }) {

  // ------------- State Stuff -------------
  const [error, setError] = useState({
    message: "",
    passwordError: false
  });

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  // ------------- Handlers -------------
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({ message: 'Passwords Must Match!', passwordError: true });
    setError({ message: '', passwordError: false });
    // We only learned formData so that's what I'm using I guess, even though I don't have an image included
    //Why did I make things harder for myself by getting rid of AWS and semantic? I should've just used what we started with...
    const formData = new FormData();
    formData.append("photo", selectedFile);
    for (let key in state) {
      formData.append(key, state[key]);
    }
    console.log("Checking formData...",
      formData.forEach((item) => console.log(item))
    );
    try {
      await userService.signup(formData);
      handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      console.log(err);
      setError({ message: err.message, passwordError: false });
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  // ------------- Here's the return -------------
  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="purple" textAlign="center">My Pokemon Journal</Header>
        <Header>A place to keep track of what's going on in all your Pokemon games.</Header>
        <br />
        <Header as="h2" color="purple" textAlign="center">
          Sign Up
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              error={error.passwordError}
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              error={error.passwordError}
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn">
              Signup
            </Button>
          </Segment>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
