import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

import TodoList from "./pages/TodoList";
import NavTab from "./components/NavTab";
import AddTodoItem from "./components/AddTodoItem";
import IconButton from "./components/IconButton";

import { HEADER } from "./constants/text";
import { INavigation, navItems } from "./constants/navigation";
import { THEME } from "./constants/color";
import { ITodo } from "./constants/interface";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 100;

  font-size: 1.5rem;
  letter-spacing: 0.1rem;

  background: ${THEME.palette.mainBackground};
`;

const NavigationWrapper = styled.div`
  width: 100vw;
  height: 5vh;

  position: fixed;
  top: 10vh;
  z-index: 100;

  background: ${THEME.palette.mainBackground};
`;

const ContentWrapper = styled.div`
  margin-top: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${THEME.palette.mainBackground};
`;

const ButtonWrapper = styled.div`
  margin: 20px 0;
`;

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  // Toggle Todo item
  const handleDone = (idx: number) => {
    const index = todos.findIndex((todo: ITodo) => todo.id === idx);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      done: !selected.done,
    };

    setTodos(nextTodos);
  };

  // Create new Todo item
  const handleCreate = (data: { text: string; img: string }) => {
    setIsEdit(false);

    // Get last index of array
    let idx;
    try {
      idx = todos.slice(-1)[0].id;
    } catch (e) {
      idx = 0;
    }

    setTodos(
      todos.concat({
        id: ++idx,
        text: data.text,
        done: false,
        img: data.img,
      })
    );
  };

  // Delete Todo item
  const handleDelete = (idx: number) => {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== idx);
    setTodos(newTodos);
  };

  const handleOnClick = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    // Get data from localstorage
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // Update data in localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <HeaderWrapper>{HEADER.title}</HeaderWrapper>
      <NavigationWrapper>
        <NavTab />
      </NavigationWrapper>
      <ContentWrapper>
        {todos === undefined
          ? ""
          : navItems.map((item: INavigation, idx: number) => (
              <Route key={idx} path={item.path} exact component={() => <TodoList todos={todos} navState={item.state} onToggle={handleDone} onDelete={handleDelete} />} />
            ))}

        {isEdit ? (
          <AddTodoItem onCreate={handleCreate} />
        ) : (
          <ButtonWrapper>
            <IconButton onClick={handleOnClick} icon="ADD" />
          </ButtonWrapper>
        )}
      </ContentWrapper>
    </BrowserRouter>
  );
};

export default App;
