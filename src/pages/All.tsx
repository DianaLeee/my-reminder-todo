import React from "react";
import styled from "styled-components";

import TodoItem from "../components/TodoItem";
import { ITodo, todoItems } from "../constants/todo";

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const All = () => {
  return (
    <TodoListContainer>
      {todoItems.map((todo: ITodo, idx) => (
        <TodoItem {...todo} />
      ))}
    </TodoListContainer>
  );
};

export default All;
