import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl);

const create = (newObject) => axios.post(baseUrl, newObject);

const remove = (idToDelete) => axios.delete(`${baseUrl}/${idToDelete}`);

const update = (idToChange, newContact) => axios.put(`${baseUrl}/${idToChange}`, newContact);


export default { getAll, create, update, remove };
