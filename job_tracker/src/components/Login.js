import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Login extends React.Component {

  state = {
    showLogin: false,
    showSignUp: false
  }

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
    return (
      <div className="landing-page">
        {<Header />}
        <div className="login">
          <button onClick={this.toggleLogin}>Login</button><br/>

          <button onClick={this.toggleSignUp}>Sign-Up</button><br/>

            {(this.state.showLogin) ?
              <form>
                Full Name:<input type="text" /><br/>
                Email:<input type="text" /><br/>
                Password:<input type="text" /><br/>
                <input type="submit" />
              </form>
              : null
            }

            {(this.state.showSignUp) ?
              <form>
                Email: <input type="text" placeholder="Email" />
                Password: <input type="text" placeholder="Password" />
                <input type="submit" />
              </form>
              :null
            }
            
        </div>
      </div>
    )
  }
}

export default Login;
