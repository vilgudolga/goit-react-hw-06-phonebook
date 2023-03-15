import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleRemove }) => {
  return (
      <ul className={styles.list}>
          {contacts.length ? contacts.map(({ id, name, number }) => (
              <ContactListItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                  handleRemove={handleRemove}
              />
          ))
              : 'No contacts'}
      </ul>
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
  handleRemove: PropTypes.func,
};

export default ContactList;
