import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Header, Icon } from "semantic-ui-react";

const PageNotFound = () => {
  let history = useHistory();
  const backToHome = () => {
    history.push("/");
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          404 Page Not Found
        </Header>
        <Button primary size="huge" onClick={backToHome}>
          Back to Home
          <Icon name="right arrow" />
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default PageNotFound;
