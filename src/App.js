import React, { useEffect, useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { v4 as uuidv4 } from "uuid";
import AddContact from './components/Contact/Contact';
import EditContact from './components/EditContact/EditContact';
import ContactList from './components/ContactList/ContactList';
import ContactDetail from './components/Contact/ContactDetail';
import api from './api';
function App() {

  const [contacts,setContacts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = async(term) => {
      setSearchTerm(term)
      if(searchTerm !== null){
        const newContactList = contacts.filter((contact) => {
            return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      }else{
        setSearchResults(contacts);
      }
  }

  const addContacts = async (name, email,e) => {
    e.preventDefault();
    const request = {
      id: uuidv4(),
      name,
      email
    }
    const response = await api.post('/contacts',request);
    return setContacts([...contacts,response.data]);
  }
  
  useEffect(() => {
    const getAllContacts = async() => {
      const response = await api.get('/contacts');
      setContacts(response.data);
    }

    getAllContacts();

  }, []);
  
  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    return setContacts(contacts.filter(contact => contact.id !== id));
  }

  const updateContact = async(name,email,id) => {
    const body = {
      name,
      email
    }
    const response = await api.put(`/contacts/${id}`, body);
    return setContacts(contacts.map(contact => {
      return contact.id === id ? response.data : contact
    }));
  } 
  return (
    <div className="ui container">
      
      <Router>
         <Header />
         
      <Routes>
        <Route path="/" element={<ContactList searchTerm={searchTerm} searchHandler={searchHandler} deleteContact={deleteContact} contacts={searchTerm.length < 1 ? contacts: searchResults} />} />
        <Route path="/add" element={<AddContact addContacts={addContacts} />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
        <Route path='/edit' element={<EditContact updateContact = {updateContact}/>} />
      </Routes>
    
      </Router>
     
     
    </div>
  );
}

export default App;
