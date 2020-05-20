import React, { useState } from "react";
import NavTab from "./components/NavTab";
import { All, Done, Active } from "./pages";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { ITodo, todoItems } from "./constants/todo";

const TopHeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;
  background: #f9fafb;

  font-size: 1.5rem;
  letter-spacing: 0.1rem;
`;

const NavTabWrapper = styled.div`
  width: 100vw;
  height: 5vh;

  position: fixed;
  top: 10vh;
  z-index: 100;
  background: #f9fafb;
`;

const MainContentWrapper = styled.div`
  height: 85vh;
  margin-top: 15vh;
  background: #f9fafb;
`;

const App = () => {
  const [todos, setTodos]: any = useState(todoItems);

  const handleClick = (idx: any) => {
    console.log(idx);
    const index = todos.findIndex((todo: any) => todo.id === idx);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      done: !selected.done,
    };

    setTodos(nextTodos);
  };

  return (
    <BrowserRouter>
      <TopHeaderWrapper>My Reminder</TopHeaderWrapper>
      <NavTabWrapper>
        <NavTab />
      </NavTabWrapper>
      <MainContentWrapper>
        <Route exact path="/" component={() => <All todos={todos} navState="All" onClick={handleClick} />} />
        <Route path="/active" component={() => <All todos={todos} navState="Active" onClick={handleClick} />} />
        <Route path="/done" component={() => <All todos={todos} navState="Done" onClick={handleClick} />} />
      </MainContentWrapper>
    </BrowserRouter>
  );
};

export default App;
