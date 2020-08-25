import React from 'react';
// import axios from 'axios';
import Dropdown from 'react-dropdown';

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

  options = ['Pending', 'Offer', 'Rejected'];

  render = () => {
    const { addApp, newStatus, newDate, newJob, newCompany, newLocation, newLink } = this.props
    return(
      <div>
        <button onClick={this.toggleForm}>Toggle Form</button>
        {(this.state.show)
          ? <form onSubmit={addApp}>
            <select onChange={newStatus}>
              <option value="Pending">Pending</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select><br/>
            <input onChange={newDate} type="date"/><br/>
            <input onChange={newJob} type="text" placeholder="Job Title"/><br/>
            <input onChange={newCompany} type="text" placeholder="Company"/><br/>
            <input onChange={newLocation} type="text" placeholder="Location"/><br/>
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
