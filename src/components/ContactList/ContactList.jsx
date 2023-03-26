import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors.js';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={styles.list}>
        {contact.name}: {contact.number}
        <button
          className={styles.button}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
