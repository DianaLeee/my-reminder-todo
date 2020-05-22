import React, { useState } from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import { storage } from "../firebase";

import IconButton from "./IconButton";
import { CONTENT } from "../constants/text";
import { THEME } from "../constants/color";

interface IAddTodoItemProps {
  onCreate: (data: { text: string; img: string }) => void;
}

interface IAddTodoItemState {
  isLoading: boolean;
}

const CustomCircularProgress = withStyles({
  root: {
    color: THEME.palette.primary,
  },
})(CircularProgress);

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 90%;
  background-color: ${THEME.palette.subBackground};
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);
`;

const ContentsWrapper = styled.div<IAddTodoItemState>`
  opacity: ${(props) => (props.isLoading ? "0.5" : "")};
  filter: ${(props) => (props.isLoading ? "alpha(opacity=50)" : "")};
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const InputTextContainer = styled.div`
  margin: 10px;
  border-bottom: 1px solid ${THEME.palette.primary};
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
  border: 1px solid ${THEME.palette.subText};
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

const ProgressWrapper = styled.div`
  position: absolute;
  left: calc(50vw - 20px);
  z-index: 200;
`;

const AddTodoItem = (props: IAddTodoItemProps) => {
  const [filename, setFilename] = useState<String>("");
  const [image, setImage] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const uploadFileToFirebase = (image: File, text: string) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        setLoading(true);
      },
      (error) => {
        // error function
        setLoading(false);
        props.onCreate({ text: text, img: "" });
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setLoading(false);
            props.onCreate({
              text: text,
              img: url,
            });
          });
      }
    );
  };

  const handleSubmit = () => {
    // verify whitespace
    let text = value;
    if (text.replace(/ /gi, "") === "" || undefined) {
      text = CONTENT.addTodo.defaultTitle;
    }

    // upload image to firebase
    if (!image) {
      props.onCreate({ text: text, img: "" });
    } else {
      uploadFileToFirebase(image, text);
    }
  };

  return (
    <TodoItemContainer>
      <ContentsWrapper isLoading={loading}>
        <TopWrapper>
          <InputTextContainer>
            <InputText type="text" placeholder={CONTENT.addTodo.placeholderText} value={value} onChange={handleChange} />
          </InputTextContainer>
          <ButtonContainer>
            <IconButton onClick={handleSubmit} icon="ADD" />
          </ButtonContainer>
        </TopWrapper>
        <ImageContainer>
          <LabelForFile>
            {CONTENT.addTodo.attachImgText}
            <InputFile type="file" onChange={handleUploadFile} />
          </LabelForFile>
          {filename !== "" ? <div style={{ fontSize: "0.6rem" }}>{filename}</div> : ""}
        </ImageContainer>
      </ContentsWrapper>
      <ProgressWrapper>{loading === true ? <CustomCircularProgress /> : ""}</ProgressWrapper>
    </TodoItemContainer>
  );
};

export default AddTodoItem;
