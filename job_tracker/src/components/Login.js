import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Login extends React.Component {

  // Setting initial showLogin and showSignUp to false so the form is not visible on page load.
  state = {
    showLogin: false,
    showSignUp: false
  }

  // Toggle the login and signup forms when the user clicks on either button
  toggleLogin = () => {
    this.setState({
      showLogin:!this.state.showLogin
    })
  }

  toggleSignUp = () => {
    this.setState({
      showSignUp:!this.state.showSignUp
    })
  }

  render = () => {
    const { newFirst, newLast, emailNew, passwordNew, signup, loginUser, loginEmail, loginPassword } = this.props
    return (
      <div className="landing-page">
        <Header />
        <div className="login">

          <button onClick={this.toggleLogin}>Login</button><br/>
          <button onClick={this.toggleSignUp}>Sign-Up</button><br/>

            {/*Determine if either button has been clicked by the user. If so, show the form the user requested.*/}

            {(this.state.showLogin) ?
              <form onSubmit={loginUser}>
                Email: <input onChange={loginEmail} type="text" placeholder="Email" />
                Password: <input onChange={loginPassword} type="password" placeholder="Password" />
                <input type="submit" />
              </form>

              : null
            }

            {(this.state.showSignUp) ?
              <form onSubmit={signup}>
                First Name:<input onChange={newFirst} type="text" placeholder="First Name"/>
                Last Name:<input onChange={newLast} type="text" placeholder="Last Name"/>
                Email:<input onChange={emailNew} type="text" placeholder="Email"/>
                Password:<input onChange={passwordNew} type="password" placeholder="8 Character Minimum"/>
                <input type="submit" />
              </form>

              :null
            }

        </div>
        <Footer />
      </div>
    )
  }
}

export default Login;
