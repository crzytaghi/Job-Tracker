import React from 'react';
// import axios from 'axios';

class Form extends React.Component{

  state = {
    app: [],
    show:false
  }


  // // ========== CREATE A NEW JOB APPLICATION ========== //
  // addApp = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:3000/application',
  //     {
  //       status:this.state.statusNew,
  //       dateSubmitted:this.state.dateSubmittedNew,
  //       jobTitle:this.state.jobTitleNew,
  //       company:this.state.companyNew,
  //       location:this.state.locationNew,
  //       link:this.state.linkNew
  //     }
  //   ).then(
  //     (response) => {
  //       console.log(response.data);
  //       this.setState({
  //         app:response.data
  //       })
  //     }
  //   )
  // }
  //
  // newStatus = (event) => {
  //   this.setState({
  //     statusNew:event.target.value
  //   })
  // }
  //
  // newDate = (event) => {
  //   this.setState({
  //     dateSubmittedNew:event.target.value
  //   })
  // }
  //
  // newJob = (event) => {
  //   this.setState({
  //     jobTitleNew:event.target.value
  //   })
  // }
  //
  // newCompany = (event) => {
  //   this.setState({
  //     companyNew:event.target.value
  //   })
  // }
  //
  // newLocation = (event) => {
  //   this.setState({
  //     locationNew:event.target.value
  //   })
  // }
  //
  // newLink = (event) => {
  //   this.setState({
  //     linkNew:event.target.value
  //   })
  // }

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
