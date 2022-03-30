import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="card shadow-sm mb-3">
      <img
        className="card-img-top border-bottom"
        src={props.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.subtitle ? (
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        ) : (
          <></>
        )}
        <p className="card-text">{props.description}</p>
      </div>
      <div className="row d-flex mt-auto justify-content-center mb-3">
        {props.twoBtns ? (
          <>
            <div className="col-5 col-sm-4">
              <Button
                btnText={props.leftBtnText}
                btnLink={props.leftBtnLink}
                btnDeactivate={props.leftBtnDeactivate}
              />
            </div>
            <div className="col-5 col-sm-4">
              <Button
                btnText={props.rightBtnText}
                btnLink={props.rightBtnLink}
                btnDeactivate={props.rightBtnDeactivate}
              />
            </div>
          </>
        ) : (
          <div className="col-5 col-sm-4">
            <Button
              btnText={props.btnText}
              btnLink={props.btnLink}
              btnDeactivate={props.btnDeactivate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
