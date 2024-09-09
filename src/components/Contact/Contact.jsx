import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteClick = (id) => {
    dispatch(deleteContact(id));
  };

  return (
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
      <button className={css.button} onClick={() => handleDeleteClick(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
