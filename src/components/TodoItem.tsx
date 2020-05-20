import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ITodo, todoItems } from "../constants/todo";
interface ITodoItem {
  done?: boolean;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  width: 80%;
  background-color: #fffffe;
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);

  flex-wrap: wrap;
`;

const BasicCircle = styled.div<ITodoItem>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  border: 1px solid #6665ff;
  background-color: ${(props) => (props.done ? "#6665ff" : "")};
  transition: background-color 0.3s ease-in;
`;

const Text = styled.p<ITodoItem>`
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  color: ${(props) => (props.done ? "#a9b1bb" : "")};
  transition: color 0.3s ease-in;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const TodoItem = (props: any) => {
  const handleToggle = () => {
    props.onSomething(props.id);
  };

  return (
    <TodoItemContainer>
      {/* <img src="https://cdn.pixabay.com/photo/2020/05/11/02/32/colorado-5156229_960_720.jpg" /> */}
      <BasicCircle onClick={handleToggle} done={props.done} />
      <Text done={props.done}>{props.text}</Text>
      <ButtonContainer>
        <button>🗑</button>
      </ButtonContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
