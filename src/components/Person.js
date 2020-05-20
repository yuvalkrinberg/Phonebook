import React from 'react';

const Person = ({ person, handleDelete }) => (
  <div key={person.name}>
    {person.name}  {person.number}  <button onClick={handleDelete}> delete </button>
  </div>
);

export default Person;
