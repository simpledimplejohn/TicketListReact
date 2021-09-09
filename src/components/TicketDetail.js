import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button>
      <hr/>
    </React.Fragment>
  )
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func

};

export default TicketDetail;

// object destructuring
// const { ticket } = props; gets the ticket object from the prop
// onClickingDelete: gets button fx and passes it down
// destructured onClickingDelete at the top of the fx