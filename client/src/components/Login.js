import React from "react";
import { Form, Input, Button } from "semantic-ui-react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <Form>
        <Input />
        <Input />
          <Button>Log In</Button>
      </Form>
    </div>
  );
};

export default Login;