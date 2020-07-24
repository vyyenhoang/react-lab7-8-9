import React from 'react';
import { Container } from 'react-bootstrap';

function About () {
  return (
    <Container className="my-5">
      <header class="jumbotron">
        <h1>All About Me</h1>
      </header>

      <div>
        <p>The autobiography of Shaun McKinnon</p>
      </div>
    </Container>
  );
}

export default About;