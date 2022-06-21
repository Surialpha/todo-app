import { MouseEventHandler } from "react";
import ReactDOM from "react-dom";
import { useTodoContext } from "../../hooks/UseTodoContext";
import { PropModel } from "../../models/PropChildrenModel";
import "./TodoModal.scss";

function TodoModal(props: PropModel) {
  const portalDiv = document.getElementById("modal")!;
  const { showModal, setShowModal } = useTodoContext();

  const closeOnClickOut = (e: MouseEventHandler<HTMLElement> | any) => {
    if (e.target.id === "modal-container") setShowModal(!showModal);
  };

  return ReactDOM.createPortal(
    showModal && (
      <section id="modal-container" onClick={closeOnClickOut}>
        <div className="modal-body">
          <span
            className="close-modal"
            onClick={() => setShowModal(!showModal)}
          >
            &#10006;
          </span>
          {props.children}
        </div>
      </section>
    ),
    portalDiv
  );
}

export { TodoModal };
