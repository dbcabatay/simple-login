import React, { useState } from "react";

import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import axios from "axios";
import qs from "qs";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  const initialState = {
    user: "",
    login: {
      username: "",
      password: "",
      grant_type: "password",
      client_id: "filconnect-management",
    },
  };

  const onSubmit = async () => {
    setProcessing(true);
    console.log("Device ID from URL:", props.location.search);

    // Process Login using authentication service

    const { login } = initialState;
    login.username = username;
    login.password = password;
    login.grant_type = "password";
    login.client_id = "filconnect-management";

    const headers = { "Content-Type": "application/x-www-form-urlencoded" };

    await axios({
      url:
        "http://acclab.ph:9090/auth/realms/5D227A3E-F36B-1410-8BEB-0003021A1292/protocol/openid-connect/token",
      method: "POST",
      data: qs.stringify(login),
      headers: headers,
      responseType: "json",
    })
      .then((response) => {
        console.log(response);
        setProcessing(false);

        toast.success("Login Success", { position: toast.POSITION.BOTTOM_CENTER });
      })
      .catch((error) => {
        console.log(error.response);
        setProcessing(false);
        toast.error(error.response.data.error_description, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={onSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large" loading={processing} disabled={processing}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
