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
    const { addApp, newStatus, newDate, newJob, newCompany, newLocation, newLink } = this.props
    return(
      <div>
        <button onClick={this.toggleForm}>Toggle Form</button>
        {(this.state.show)
          ? <form onSubmit={addApp}>
              <label>Job Status:</label><br/>
                <select onChange={newStatus}>
                  <option value="" disabled selected>Choose Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select><br/>
              <label>Date Submitted:</label><br/>
                <input onChange={newDate} type="date"/><br/>
              <label>Job Title:</label><br/>
                <input onChange={newJob} type="text" placeholder="Job Title"/><br/>
              <label>Company:</label><br/>
                <input onChange={newCompany} type="text" placeholder="Company"/><br/>
              <label>Location:</label><br/>
                <input onChange={newLocation} type="text" placeholder="Location"/><br/>
              <label>Job Link:</label><br/>
                <input onChange={newLink} type="text" placeholder="Link"/><br/>
              <input type="submit" value="submit"/><br/>
            </form>
          : null
         }
      </div>
    )
  }
}

export default Form;
