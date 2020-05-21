import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ITodo, todoItems } from "../constants/todo";
import { storage } from "../firebase";

interface ITodoItem {
  done?: boolean;
}

const TodoItemContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  width: 90%;
  background-color: #fffffe;
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);

  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const InputTextContainer = styled.div`
  /* width: 100%; */
  margin: 10px;
  border-bottom: 1px solid #6665ff;
`;

const InputText = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  &::placeholder {
    opacity: 0.5;
  }
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  flex-wrap: wrap;
`;

const LabelForFile = styled.label`
  border: 1px solid #a9b1bb;
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 0.6rem;
  margin-right: 10px;
`;
const InputFile = styled.input`
  display: none;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddTodoItem = (props: any) => {
  const [filename, setFilename] = useState<String>("");
  const [image, setImage] = useState<File | null>(null);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // verify null
    if (!e.target.files) return;

    // verify cancel after select file
    if (e.target.files.length !== 0) {
      setFilename(e.target.files[0].name);
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // verify whitespace
    let text = value;
    if (value.replace(/ /gi, "") === "" || undefined) {
      text = "할 일";
    }

    if (!image) {
      props.onCreate({ text: text, img: "" });
    } else {
      // upload image to firebase
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function
        },
        (error) => {
          // error function
          console.log(error);
          props.onCreate({ text: text, img: "" });
        },
        () => {
          // complete function
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              props.onCreate({
                text: text,
                img: url,
              });
            });
        }
      );
    }
  };

  return (
    <TodoItemContainer>
      <TopWrapper>
        <InputTextContainer>
          <InputText type="text" placeholder="할 일을 입력하세요" value={value} onChange={handleChange} />
        </InputTextContainer>
        <ButtonContainer>
          <button onClick={handleSubmit}>
            <span role="img" aria-label="add new todo button">
              ➕
            </span>
          </button>
        </ButtonContainer>
      </TopWrapper>
      <ImageContainer>
        <LabelForFile>
          🖼 Attach image
          <InputFile type="file" onChange={handleUploadFile} />
        </LabelForFile>
        {filename !== "" ? <div style={{ fontSize: "0.6rem" }}>{filename}</div> : ""}
      </ImageContainer>
    </TodoItemContainer>
  );
};

export default AddTodoItem;
