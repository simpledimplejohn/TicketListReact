import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
      <p><strong>****VISIBLE -List of current tickets-, TicketList.js***</strong></p>
      <hr/>
      <p>sends props down to ticket</p>
      {props.ticketList.map((ticket) =>
        <Ticket 
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};
//this passes down the propTypes:
// ticketList the array
// & onTicketSelection the function determines whether a ticket has been selected

export default TicketList;