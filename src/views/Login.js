import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { useStoreActions } from 'easy-peasy';
import { Card, TextInputField, Heading, Button } from 'evergreen-ui';

import GuestLayout from '../layouts/GuestLayout';

function Login() {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useStoreActions(actions => actions.auth.login);

  const onSubmit = data => {
    login(data);
  };

  return (
    <GuestLayout>
      <Card
        width={500}
        height={500}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="default"
      >
        <Heading size={800} marginTop="default">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            label="E-mail"
            name="email"
            type="email"
            placeholder="test@test.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            innerRef={register}
          />
          <TextInputField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            innerRef={register}
          />
          <Button type="submit" appearance="primary">
            Login
          </Button>
        </form>
      </Card>
    </GuestLayout>
  );
}

export default Login;
