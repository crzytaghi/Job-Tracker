import React from 'react';
// import axios from 'axios';

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
            <input onChange={newStatus} type="text" placeholder="Status"/><br/>
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
