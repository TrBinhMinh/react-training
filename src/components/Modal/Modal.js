import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      classNames="fade-slide"
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // onEnter={() => console.log("Enter")}
      // onEntering={() => console.log("Entering")}
      // onEntered={() => console.log("Entered")}
      // onExit={() => console.log("Exit")}
      // onExiting={() => console.log("Exiting")}
      // onExited={() => console.log("Exited")}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
      );
    </CSSTransition>
  );
};

export default modal;
