import React from 'react';
// import axios from 'axios';
// import Dropdown from 'react-dropdown';

class Form extends React.Component{

  state = {
    app: [],
    show:false
  }

  toggleForm = () => {
    this.setState({
      show:!this.state.show
    })
  }

  render = () => {
    // initiating the variables in order to access the variables in the main.js file
    const { addApp, newStatus, newDate, newJob, newCompany, newLocation, newLink } = this.props
    return(
      <div className="form">
        <button onClick={this.toggleForm}>Toggle Application Form</button>
        {(this.state.show)
          ? <form onSubmit={addApp}>
              <label>Job Status:</label>
                <select onChange={newStatus}>
                  <option value="" disabled selected>Choose Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              <label>Date Submitted:</label>
                <input onChange={newDate} type="date"/>
              <label>Job Title:</label>
                <input onChange={newJob} type="text" placeholder="Job Title"/>
              <label>Company:</label>
                <input onChange={newCompany} type="text" placeholder="Company"/>
              <label>Location:</label>
                <input onChange={newLocation} type="text" placeholder="Location"/>
              <label>Job Link:</label>
                <input onChange={newLink} type="text" placeholder="Link"/>
              <input type="submit" value="submit"/>
            </form>
          : null
         }
      </div>
    )
  }
}

export default Form;
