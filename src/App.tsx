import React from "react";
import NavTab from "./components/NavTab";
import { All, Done, Active } from "./pages";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

const TopHeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
  background: #ffffff;

  font-size: 1.5rem;
  letter-spacing: 0.1rem;
`;

const NavTabWrapper = styled.div`
  width: 100vw;
  height: 5vh;

  position: fixed;
  top: 10vh;
  z-index: 100;
  background: #ffffff;
`;

const MainContentWrapper = styled.div`
  height: 85vh;
  margin-top: 15vh;
  background: #ffffff;
`;

function App() {
  return (
    <BrowserRouter>
      <TopHeaderWrapper>My Reminder</TopHeaderWrapper>
      <NavTabWrapper>
        <NavTab />
      </NavTabWrapper>
      <MainContentWrapper>
        <Route exact path="/" component={All} />
        <Route path="/active" component={Active} />
        <Route path="/done" component={Done} />
      </MainContentWrapper>
    </BrowserRouter>
  );
}

export default App;
