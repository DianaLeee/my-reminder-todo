import React from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import { ITodo } from "../constants/interface";
import { THEME } from "../constants/color";

interface ITodoItemProps {
  key: number;
  todo: ITodo;
  onDone: (idx: number) => void;
  onDelete: (idx: number) => void;
  onClick: (idx: number) => void;
}

interface ITodoItemState {
  done?: boolean;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  background-color: ${THEME.palette.subBackground};
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);

  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BasicCircle = styled.div<ITodoItemState>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  border: 1px solid ${THEME.palette.primary};
  background-color: ${(props) => (props.done ? THEME.palette.primary : "")};
  transition: background-color 0.3s ease-in;

  min-width: 20px;
`;

const Text = styled.p<ITodoItemState>`
  margin-left: 10px;
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
  color: ${(props) => (props.done ? THEME.palette.subText : "")};
  transition: color 0.3s ease-in;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
`;

const ImageContent = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const TodoItem = (props: ITodoItemProps) => {
  const handleToggle = () => {
    props.onDone(props.todo.id);
  };

  const handleDelete = () => {
    props.onDelete(props.todo.id);
  };

  return (
    <TodoItemContainer>
      <TextContainer>
        <LeftContainer>
          <BasicCircle onClick={handleToggle} done={props.todo.done} />
          <Text done={props.todo.done}>{props.todo.text}</Text>
        </LeftContainer>
        <IconButton onClick={handleDelete} icon="DELETE" />
      </TextContainer>
      {props.todo.img === "" ? (
        ""
      ) : (
        <ImageContainer>
          <ImageContent src={props.todo.img} />
        </ImageContainer>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
