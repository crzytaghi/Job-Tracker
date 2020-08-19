import React from 'react';
import axios from 'axios';
import Form from '../components/form';

class Main extends React.Component {

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
        status:this.state.statusNew,
        dateSubmitted:this.state.dateSubmittedNew,
        jobTitle:this.state.jobTitleNew,
        company:this.state.companyNew,
        location:this.state.locationNew,
        link:this.state.linkNew
      }
    ).then(
      (response) => {
        console.log(response.data);
        this.setState({
          app:response.data
        })
      }
    )
  }

  newStatus = (event) => {
    this.setState({
      statusNew:event.target.value
    })
  }

  newDate = (event) => {
    this.setState({
      dateSubmittedNew:event.target.value
    })
  }

  newJob = (event) => {
    this.setState({
      jobTitleNew:event.target.value
    })
  }

  newCompany = (event) => {
    this.setState({
      companyNew:event.target.value
    })
  }

  newLocation = (event) => {
    this.setState({
      locationNew:event.target.value
    })
  }

  newLink = (event) => {
    this.setState({
      linkNew:event.target.value
    })
  }

  render = () => {
    return (
      <div>
      <Form
        addApp={this.addApp}
        newStatus={this.newStatus}
        newDate={this.newDate}
        newJob={this.newJob}
        newCompany={this.newCompany}
        newLocation={this.newLocation}
        newLink={this.newLink}
      />
      {this.state.app.map((application,i) =>
          <table key={i}>
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
      }
      </div>
    )
  }
}

export default Main;
