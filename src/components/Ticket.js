import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>

      <div onClick = { () => props.whenTicketClicked(props.id)}>
        <p><strong>****Ticket.js***</strong></p>
        <p><strong>*runs props.whenTicketClicked and sends props.id*</strong></p>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};
//Ticket holds all the propTypes that will be passed down 
//onClick pulls an individual ticket
//onClick uses an arrow fx to prevent it from being called immediately

export default Ticket;