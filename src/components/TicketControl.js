import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
  }
  
  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState =>({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  //setState() takes an object, and can take two arguments 
  //pass in current state, change to the oposite state with !
  //use an arrow fx for automatic this. binding


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />
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