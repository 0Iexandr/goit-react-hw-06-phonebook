import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2 className={css.subtitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.emptylist}>Please, add contact!</p>
      )}
    </div>
  );
}
