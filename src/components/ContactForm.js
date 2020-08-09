import React, { Component } from 'react'

export default class ContactForm extends Component {

    state={
        name:'',
        number:''
    }

    handleChange = e => {
       const  {name,value} = e.target
       this.setState({[name]:value})
    //    console.log( [name] , value )
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddContact(this.state)
        this.setState({name:'',number:''})
    }

    render (){
        const {name,number} = this.state

    return (
    <form className='contact-form' onSubmit={this.handleSubmit}>
    <label htmlFor='name'> Name:  </label>
        <input 
        value={name} 
        name='name' 
        id='name' 
        type='text' 
        onChange={this.handleChange}/>
    <label htmlFor='number'> Number:  </label>
        <input 
        value={number} 
        name='number' 
        id='number' 
        type='text' 
        onChange={this.handleChange}/>
        <button type='submit'> Add contact</button>
   
    </form>)
}
}

