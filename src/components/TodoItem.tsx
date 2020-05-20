import React, { useState } from "react";
import styled from "styled-components";
import { ITodo, todoItems } from "../constants/todo";
interface ITodoItem {}

const TodoItem = (props: ITodo) => {
  return (
    <div>
      <div>{props.text}</div>
      {props.done ? <input type="checkbox" checked /> : <input type="checkbox" />}
    </div>
  );
};

export default TodoItem;
