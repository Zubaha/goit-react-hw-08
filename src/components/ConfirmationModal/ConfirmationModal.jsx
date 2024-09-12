import Modal from "react-modal";
import css from "./ConfirmationModal.module.css";

function ConfirmationModal({
  isOpen,
  onRequestClose,
  onConfirm,
  contactName,
  contactNumber,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <h2>Confirmation</h2>
        <p>
          Are you sure you want to delete the contact: <br /> Name:{contactName}{" "}
          <br />
          Number:{contactNumber}.
        </p>
        <div className={css.buttons}>
          <button className={css.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={css.cancelButton} onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
