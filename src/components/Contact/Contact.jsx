import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useState } from "react";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleConfirm = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  return (
    <>
      <li className={css.wrapper}>
        <div className={css.wrapperUser}>
          <p>
            <FaUser className={css.name} />
            {name}
          </p>
          <p>
            <FaPhoneAlt className={css.number} />
            {number}
          </p>
        </div>
        <button className={css.button} onClick={openModal}>
          Delete
        </button>
      </li>

      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={handleConfirm}
        contactName={name}
        contactNumber={number}
      />
    </>
  );
}

export default Contact;
