import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../Ejercicio Bootcamp 1 (React)/Contact.class'

const ContactComponent = ({contact}) => {
  return(<div>
    {/* The && → This sign when the prop is empty show the modal without message (the other way without && show an error)  */}
    <h5>First Name: {contact._firstName && contact._firstName}</h5>
    <h5>Last Name: {contact._lastName && contact._lastName}</h5>
    <h5>Email: {contact._email && contact._email}</h5>
    {/* The string change depends the state */}
    <h6>Status{contact._connected ? "🟢" : "🔴"}</h6>
  </div>)
}

ContactComponent.PropTypes = {
    //Get the information about the constructor
    contact: PropTypes.instanceOf(Contact)
}
export default ContactComponent;
