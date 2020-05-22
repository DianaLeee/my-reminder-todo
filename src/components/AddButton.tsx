import React from "react";

interface IAddButtonProps {
  onClick: () => void;
}

const AddButton = (props: IAddButtonProps) => {
  return (
    <button onClick={props.onClick}>
      <span role="img" aria-label="add button">
        ➕
      </span>
    </button>
  );
};

export default AddButton;
