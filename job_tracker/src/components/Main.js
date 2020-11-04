import React from 'react';
import axios from 'axios';
import Form from './form';
import Edit from './Edit';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

class Main extends React.Component {

  state = {
    app: [],
    loggedInUser: true
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

  deleteApp = (event) => {
    axios.delete('http://localhost:3000/application/' + event.target.value).then(
      (response) => {
        this.setState({
          app:response.data
        })
      }
    )
  }

  // function to determine if the user is logged in. If so, sets the loggedInUser value to true which displays the info to the user.
  signUp = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/user',
      {
        firstName: this.state.newFirstName,
        lastName: this.state.newLastName,
        email: this.state.newEmail,
        password: this.state.newPassword
      }
    ).then(
      (response) => {
        console.log(response);
        this.setState({
          loggedInUser:response.data
        })
      }
    )
  }

  // Adding a first name
  newFirst = (event) => {
    // console.log(event.target.value);
    this.setState({
      newFirstName: event.target.vaule
    })
  }

  // Adding a last name
  newLast = (event) => {
    // console.log(event.target.value);
    this.setState({
      newLastName: event.target.value
    })
  }

  // Adding an email address that must be unique
  emailNew = (event) => {
    // console.log(event.target.value);
    this.setState({
      newEmail: event.target.value
    })
  }

  // Adding a password
  passwordNew = (event) => {
    // console.log(event.target.value);
    this.setState({
      newPassword:event.target.value
    })
  }

  render = () => {
    return (
      <div>
        {/* Passing the newFirst, newLast, emailNew, passwordNew, and signUp props into the Login.js file. Initially set to !this.state.loggedInUser so if the user is not logged in, it will only show the data from the Form.js file which only has the SignUp and Login Forms. */}
      {!this.state.loggedInUser ?
        <Login
          newFirst = {this.newFirst}
          newLast = {this.newLast}
          emailNew = {this.emailNew}
          passwordNew = {this.passwordNew}
          signup = {this.signUp}
        /> :
        <div className="main">
          <Header />
          <Form
            addApp={this.addApp}
            newStatus={this.newStatus}
            newDate={this.newDate}
            newJob={this.newJob}
            newCompany={this.newCompany}
            newLocation={this.newLocation}
            newLink={this.newLink}
          />
          <div className="table">
            <table>
              <thead className="table-header">
                <tr>
                  <th>Status</th>
                  <th>Date Submitted</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Link</th>
                </tr>
              </thead>
              {this.state.app.map((application,i) =>
                <tbody key={i}>
                  <tr>
                    <td><Edit index={application} /></td>
                    <td>{application.dateSubmitted}</td>
                    <td>{application.jobTitle}</td>
                    <td>{application.company}</td>
                    <td>{application.location}</td>
                    <td><a rel="noopener noreferrer" className="job-link" target="_blank" href={application.link}>{application.jobTitle}</a></td>
                    <td className="delete" colSpan="6"><button onClick={this.deleteApp} value={application._id}>DELETE</button></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          <Footer />
        </div>
      }
      </div>
    )
  }
}

export default Main;
