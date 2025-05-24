// import { useState, useEffect } from 'react';

import ContactForm from '../contactForm/ContactForm';
import SearchBox from '../searchBox/SearchBox';
import ContactList from '../contactList/ContactList';
import './App.css';

function App() {
  // const initial = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // const [contList, setContList] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('contList');

  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }

  //   return initial;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contList', JSON.stringify(contList));
  // }, [contList]);

  // const filteredContacts = contList.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  // );

  return (
    <div className="mainWrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
