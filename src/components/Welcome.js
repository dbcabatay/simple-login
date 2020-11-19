import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

const Welcome = () => {
  let history = useHistory();
  if (window.localStorage.getItem("data") === null) {
    history.push("/simple-login");
  }

  const logout = () => {
    localStorage.clear();
    history.push("/simple-login");
  };
  return (
    <Container text>
      <Header
        as="h1"
        content="Hi, Welcome!"
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em",
        }}
      />
      <Header
        as="h2"
        content=""
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em",
        }}
      />
      <Button primary size="huge" onClick={logout}>
        Logout
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};
export default Welcome;
