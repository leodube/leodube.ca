import React from "react";

const Button = (props) => {
  return (
    <>
      {props.btnDeactivate ? (
        <a href="#" className="btn btn-secondary btn-block disabled">
          {props.btnText}
        </a>
      ) : (
        <a
          href={props.btnLink}
          target="_blank"
          className="btn btn-primary btn-block"
        >
          {props.btnText}
        </a>
      )}
    </>
  );
};

export default Button;
