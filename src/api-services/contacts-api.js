import axios from 'axios';

axios.defaults.baseURL = 'https://619c06d668ebaa001753c73c.mockapi.io';

export const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
