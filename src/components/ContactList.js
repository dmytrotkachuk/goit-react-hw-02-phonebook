import React from 'react'

const ContactList = ({contacts, onRemove}) =>{

    return (
    <ul className='contacts-list'>
        { contacts.map(({id,name,number}) => 
            <li key={id} className='contacts-item'> 
            <span className='contact-name'> {name} : {number} </span>
                
                <button onClick={()=> onRemove(id)}>remove </button>
            </li>
        )}
     </ul>
    )
   
}

export default ContactList