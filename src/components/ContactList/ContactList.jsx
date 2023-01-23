import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};