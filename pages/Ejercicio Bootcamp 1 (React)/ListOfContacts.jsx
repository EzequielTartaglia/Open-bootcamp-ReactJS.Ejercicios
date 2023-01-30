import React from 'react'
import { Contact } from '../Ejercicio Bootcamp 1 (React)/Contact.class.jsx'
import ContactComponent from './ContactComponent'

function ListOfContacts() {

    //Example 1
    const exampleContact = new Contact("Ezequiel","Matias","ezequieltartaglia@gmail.com",true)
  return (<div>
    <div>List Of Contacts:</div>
    
    <div><ContactComponent contact={exampleContact}/></div>

    </div>)
}

export default ListOfContacts;