import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <p><strong>****TicketDetail.js***</strong></p>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Ticket **button and text in TicketDetail.js**</button>
      <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket **button and text in TicketDetail.js**</button>
      <hr/>
    </React.Fragment>
  )
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

export default TicketDetail;

// object destructuring
// const { ticket } = props; gets the ticket object from the prop
// onClickingDelete: gets button fx and passes it down
// destructured onClickingDelete at the top of the fx