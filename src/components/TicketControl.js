import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [],
      selectedTicket: null
    };
  }
  //event handler fx prefixed with handle
  //use .concat(newTicket) to makes a copy of the array instead of adding to it with .push(newTicket)
  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false 
                  });
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState =>({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  //if this.state.selectedticket isn't null the we must be on a ticket detail page, in that case we know that formVisibleOnPage should be false and selectedTicket should be null
  //setState() takes an object, and can take two arguments 
  //pass in current state, change to the oposite state with !
  //use an arrow fx for automatic this. binding

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }
  //filter() returns array so set to [0] because we only need one item

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      masterTicketList: newMasterTicketList,
      selectedTicket: null
    });
  }
  // filter out everything that doesn't have our delte id, then make a new list with those (functional)
  //then add the new filtered list to the key value pair
  //set slected ticket back to null so that TickList will be showing


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} /> //onClickingDelte passes our handleDeletingTicket as a prop
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
// this is where we pass the ability to selecte the ticket from the ticket list onTicketSelection and currentlyVisibleState are props
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {<button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
      //button lives on the DOM so this needs to be bound so it can have access to it
      //arrow fx automatically bind this
    );
  }
}

export default TicketControl;