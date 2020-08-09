import React, {Component} from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default class App extends Component{

  state = {
    contacts:[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
  }

  addContact = ({name,number}) =>{
    const contact = {
      id:uuidv4(),
      name: name,
      number:number
    }

    this.setState(prevState => {
      return{contacts: [...prevState.contacts,contact]}
    })
  }

  removeContact = contactId => {
    console.log(contactId)
    this.setState(prevState=>{
      return {contacts: prevState.contacts.filter(({id}) => id !== contactId)}
    })
  }

  changeFilter = (filter) =>{
    this.setState({filter})

  }

  getVisibleContacts = () =>{
    const {contacts,filter} = this.state
    console.log(filter)
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    
  }

  render(){

    const {contacts,filter} = this.state;
    const visibleContacts = this.getVisibleContacts()

  return (

    <div className='pnohebook-container'>

    <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
       
    <h2>Contacts</h2>
    {contacts.length > 1 && <Filter onChangeFilter={this.changeFilter} value={filter}/>}
    {visibleContacts.length > 0 && <ContactList contacts={visibleContacts} onRemove={this.removeContact}/>}

    </div>
  )
}
}


