import React from 'react';
import axios from 'axios';

class Form extends React.Component{

  state = {
    app: []
  }

  // ========== MAKE A REQUEST TO THE DB ========== //
  componentDidMount = () => {
    axios.get('http://localhost:3000/application').then(
      (response) => {
        console.log(response.data);
        this.setState({
          app:response.data
        })
      }
    )
  }

  // ========== CREATE A NEW JOB APPLICATION ========== //
  addApp = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/application',
      {
        status:this.newStatus,
        dateSubmitted:this.newDate,
        jobTitle:this.newJob,
        company:this.newCompany,
        location:this.newLocation,
        link:this.newLink
      }
    ).then(
      (response) => {
        console.log(response.data);
        this.setState({
          app:response.data
        }).catch(
          (error) => {
            console.log(error);
          }
        )
      }
    )
  }

  newStatus = (event) => {
    this.setState({
      status:event.target.value
    })
  }

  newDate = (event) => {
    this.setState({
      dateSubmitted:event.target.value
    })
  }

  newJob = (event) => {
    this.setState({
      jobTitle:event.target.value
    })
  }

  newCompany = (event) => {
    this.setState({
      company:event.target.value
    })
  }

  newLocation = (event) => {
    this.setState({
      location:event.target.value
    })
  }

  newLink = (event) => {
    this.setState({
      link:event.target.value
    })
  }

  render = () => {
    return(
      <div>
        <form onSubmit={this.addApp}>
          <input onChange={this.newStatus} type="text" placeholder="Status"/><br/>
          <input onChange={this.newDate} type="date"/><br/>
          <input onChange={this.newJob} type="text" placeholder="Job Title"/><br/>
          <input onChange={this.newCompany} type="text" placeholder="Company"/><br/>
          <input onChange={this.newLocation} type="text" placeholder="Location"/><br/>
          <input onChange={this.newLink} type="text" placeholder="Link"/><br/>
          <input type="submit" value="submit"/><br/>
        </form>
        {this.state.app.map((application,index) => {
          return (
            <table key={index}>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Date Submitted</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{application.status}</td>
                  <td>{application.dateSubmitted}</td>
                  <td>{application.jobTitle}</td>
                  <td>{application.company}</td>
                  <td>{application.location}</td>
                  <td>{application.link}</td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    )
  }
}

export default Form;
