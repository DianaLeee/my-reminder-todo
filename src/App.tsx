import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      Hello World
      <span role="img" aria-label="unicorn">
        🦄
      </span>
    </Container>
  );
}

export default App;
