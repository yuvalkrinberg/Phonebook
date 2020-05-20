import React from 'react';
import Person from './Person';

const PersonsList = ({ persons, search, handleDelete }) => {
  return (
    <div>
      {search === ''
        ? persons.map((person) => <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id)} />) // The search tool wasn't used
        : persons.filter(((el) => el.name.toLowerCase().startsWith(search.toLowerCase()))) // filter for search
          .map((person) => <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id)} />) }
    </div>
  );
};

export default PersonsList;
