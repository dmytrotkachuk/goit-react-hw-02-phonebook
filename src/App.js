import React, {Component} from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default class App extends Component{

  state = {
    contacts:[],
    filter:'',
  }

  componentDidMount(){
    // console.log('contacts componentDidMount')
    const persistedContacts = localStorage.getItem('contacts')
    // проверяем или LS не возвращает null
    if(persistedContacts){
      this.setState({contacts: JSON.parse(persistedContacts) })
    }

  }

  componentDidUpdate(prevProps, prevState){
    // console.log("contacts componentDidUpdate")
    //Чтобы не создать бесконечный цикл, перезаписываем только по условию
    if (prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }

  //добавляем новый контакт, имя и номер возьмем из state ContactForm, id генерим тут
  addContact = ({name,number}) =>{
    const contact = {
      id:uuidv4(),
      name: name,
      number:number
    }
  //распыляем старый массив и добавляем к нему новый контакт
    this.setState(prevState => {
      return{contacts: [...prevState.contacts,contact]}
    })
  }

  removeContact = contactId => {
    // console.log(contactId)
    this.setState(prevState=>{
      return {contacts: prevState.contacts.filter(({id}) => id !== contactId)}
    })
  }

  changeFilter = (filter) =>{
    this.setState({filter})

  }

  getVisibleContacts = () =>{
    const {contacts,filter} = this.state
    // console.log(filter)
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


