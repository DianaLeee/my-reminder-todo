import React, { useState } from "react";
import styled from "styled-components";

import TodoItem from "../components/TodoItem";
import { ITodo } from "../constants/interface";

interface ITodoListProps {
  navState: "ALL" | "ACTIVE" | "DONE" | undefined;
  todos: ITodo[];
  onToggle: (idx: number) => void;
  onDelete: (idx: number) => void;
}

const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoList = (props: ITodoListProps) => {
  const [todos] = useState<ITodo[]>(props.todos);

  const handleToggle = (idx: number) => {
    props.onToggle(idx);
  };

  const handleDelete = (idx: number) => {
    props.onDelete(idx);
  };

  return (
    <TodoListContainer>
      {todos
        .filter((todo: ITodo) => {
          if (props.navState === "ACTIVE") return !todo.done;
          if (props.navState === "DONE") return todo.done;
          return true;
        })
        .map((todo: ITodo) => (
          <TodoItem todo={todo} key={todo.id} onDone={props.onToggle} onClick={handleToggle} onDelete={handleDelete} />
        ))}
    </TodoListContainer>
  );
};

export default TodoList;
