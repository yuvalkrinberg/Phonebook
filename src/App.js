import React, { useState, useEffect } from 'react';
import FileForm from './components/FileForm';
import Search from './components/Search';
import PersonsList from './components/PersonsList';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');

  // Will run only one time when  the App is rendered for the first time
  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newPhone,
    };
    const exists = persons.find((person) => person.name === newName);
    if (exists) {
      const toChange = window.confirm(`${newName} is already exists in the phonebook, would you like to change his phone number?`);
      if (toChange) {
        const changedContact = { ...exists, number: newPhone };
        personService
          .update(changedContact.id, changedContact)
          .then((response) => {
            setPersons(persons.map((person) => (person.id !== exists.id ? person : response.data)));
          });
      }
    } else {
      personService
        .create(newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
        });
    }
    setNewPhone('');
    setNewName('');
  };

  const handleDelete = (idToDelete) => {
    const result = window.confirm('Would you like to delete this person from the list?');
    if (result) {
      personService
        .remove(idToDelete)
        .then(() => {
          setPersons(persons.filter(((person) => person.id !== idToDelete)));
        });
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook search</h2>

      <Search search={search} handleSearch={handleSearch} />

      <h2>Add a new name</h2>

      <FileForm newName={newName} newPhone={newPhone} handleNewName={handleNewName} handleNewPhone={handleNewPhone} addName={addName} />

      <h2>Numbers</h2>

      <PersonsList persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
