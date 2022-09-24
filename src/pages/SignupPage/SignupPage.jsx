import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Text, Container } from '@mantine/core';


export default function SignUpPage({ handleSignUpOrLogin }) {

  const [error, setError] = useState({
    message: '',
    passwordError: false
  });
  
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const form = useForm({
    initialValues: { name: '', email: '', password: '' },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    },
  });

  return (
      <Box sx={{ maxWidth: 450 }} mx="auto" my="auto" color="grey">
        <Text mt="sm" align="center" size="xl" weight={700} my="sm">My Pokemon Journal</Text>
        <Text size="md" my="sm">One place to track what's going on in all your Pokemon games.</Text>
        <Container>
          <form onSubmit={form.onSubmit(console.log)}>
            <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
            <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
            <TextInput mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
            <Container align="center">
              <Button type="submit" mt="sm">
                Submit
              </Button>
            </Container>
          </form>
        </Container>
      </Box>
  );
}
