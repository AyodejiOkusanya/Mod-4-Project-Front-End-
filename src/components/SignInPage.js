import React from 'react'
import { isAbsolute } from 'path';
import { Link } from "react-router-dom";

class SignInPage extends React.Component {
  state = {
    username: null,
    password: null
  }

  backgroundImage = require('../sign-in-background.jpg')

  handleOnChange = (event) => {
      this.setState({ [event.target.name]: event.target.value})
  }
  render () {
    return (
       
        <div id="sign-in"
          style={{
            backgroundImage: `url(${this.backgroundImage})`,
            // backgroundRepeat:"y-axis",
            
            
            display: 'flex',
            paddingTop: '300px',
            justifyContent: 'center'
          }}
        >
          <form class='ui form' style={{position: "absolute", top: "400px", padding:"0px"}}>
            <div class='field'>
              <label>First Name</label>
              <input type='text' name='username' placeholder='Username' onChange={this.handleOnChange}/>
            </div>
            <div class='field'>
              <label>Last Name</label>
              <input type='text' name='password' placeholder='Password' onChange={this.handleOnChange}/>
            </div>
            <div class='field'>
              <div class='ui checkbox'>
                <input type='checkbox' tabindex='0' class='hidden' />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <Link class='ui button' type='submit' to="/App">Enter The Matrix</Link>
            
          </form>
        </div>
      
    )
  }
}

export default SignInPage
