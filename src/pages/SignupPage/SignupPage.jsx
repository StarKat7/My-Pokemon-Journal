import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Box, Text, Container } from '@mantine/core';


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

  // ------------- Handlers -------------
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({ message: 'Passwords Must Match!', passwordError: true });
    setError({ message: '', passwordError: false });
    // We only learned formData so that's what I'm using I guess, even though I don't have an image included
    const formData = new FormData();
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


  // ------------- Mantine Form Stuff -------------
  const form = useForm({
    initialValues: { name: "", email: "", password: "", passwordConf: "" },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  // ------------- Here's the return -------------
  return (
    <Box sx={{ maxWidth: 450 }} mx="auto" my="auto" color="grey">
      <Container sx={{ maxWidth: 400 }}>
        <Text mt="sm" align="center" size="xl" weight={700} my="sm">My Pokemon Journal</Text>
        <Text size="md" my="sm">One place to track what's going on in all your Pokemon games.</Text>
      </Container>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextInput label="Name"
            placeholder="Name"
            onChange={handleChange}
            {...form.getInputProps('name')} />
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            onChange={handleChange}
            {...form.getInputProps('email')} />
          <PasswordInput
            mt="sm"
            label="Password"
            placeholder="Password"
            onChange={handleChange}
            {...form.getInputProps('password')} />
          <PasswordInput
            mt="sm"
            label="Confirm Password"
            placeholder="Password"
            onChange={handleChange}
            {...form.getInputProps('passwordConf')} />
          <Container align="center">
            <Button type="submit" mt="sm" my="md">
              Submit
            </Button>
          </Container>
        </form>
      </Container>
    </Box>
  );
}
