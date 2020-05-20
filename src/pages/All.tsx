import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TodoItem from "../components/TodoItem";
import { ITodo, todoItems } from "../constants/todo";

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;
`;

const All = (props: any) => {
  const [todos, setTodos]: any = useState(props.todos);

  const handleToggle = (idx: any) => {
    props.onClick(idx);
  };

  return (
    <TodoListContainer>
      {todos
        .filter((todo: ITodo) => {
          if (props.navState === "Active") {
            return !todo.done;
          }
          if (props.navState === "Done") {
            return todo.done;
          }
          return true;
        })
        .map((todo: ITodo) => (
          <TodoItem {...todo} key={todo.id} onSomething={props.onClick} onClick={handleToggle} />
        ))}
    </TodoListContainer>
  );
};

export default All;
