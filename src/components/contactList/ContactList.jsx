import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contList, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {contList.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
