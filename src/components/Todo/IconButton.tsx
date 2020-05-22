import React from "react";

interface IIconButtonProps {
  icon: "ADD" | "DELETE";
  onClick: () => void;
}

const IconButton = (props: IIconButtonProps) => {
  return (
    <button onClick={props.onClick}>
      {props.icon === "ADD" ? (
        <span role="img" aria-label="add button">
          ➕
        </span>
      ) : (
        <span role="img" aria-label="delete button">
          🗑
        </span>
      )}
    </button>
  );
};

export default IconButton;
