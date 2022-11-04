import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "../../assets/close.png";
import "./Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div
          className="modal-content rounded-lg border-blue-400 border-2 w-[50%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header flex flex-row align-middle justify-between ">
            <p className="modal-title text-xl font-bold">{props.title}</p>
            <button
              className="w-8 p-1 bg-red-400 rounded-md"
              onClick={props.onClose}
            >
              <img src={CloseIcon} alt="close icon" className="invert" />
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer flex flex-row justify-end">
            <button
              onClick={() => {
                props.submitAction();
                // props.onClose();
              }}
              className="rounded-full bg-[#3f0071] text-white px-3 py-1 hover:cursor-pointer"
              disabled={props.primaryBtnDisable}
            >
              {props.actionBtn}
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
