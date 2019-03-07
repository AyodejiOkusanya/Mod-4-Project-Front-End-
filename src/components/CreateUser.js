import React from 'react'
import { isAbsolute } from 'path';
import { Link } from "react-router-dom";
import API from '../API'

class CreateUser extends React.Component {
  state = {
    username: "",
    password: ""
  }

  backgroundImage = require('../sign-in-background.jpg')

  handleOnChange = (event) => {
      this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state
    API.createUser(user).then(data => {
      if (data.error) {
        alert('Incorrect Login details')
      } else {
        // this.props.signin(data)
        localStorage.setItem("token", data.token);
        // console.log(data)
        this.props.history.push("/app")
      }
    })
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
          <form class='ui form' style={{position: "absolute", top: "400px", padding:"0px"}} >
            <div class='field'>
              <label>Username</label>
              <input type='text' name='username' placeholder='Username' onChange={this.handleOnChange}/>
            </div>
            <div class='field'>
              <label>Password</label>
              <input type='password' name='password' placeholder='Password' onChange={this.handleOnChange}/>
            </div>
            <div class='field'>
              <div class='ui checkbox'>
                <input type='checkbox' tabindex='0' class='hidden' />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <Link class='ui button' to="/App" onClick={(event) => this.handleSubmit(event)} >Enter The Matrix</Link>
            
          </form>
        </div>
      
    )
  }
}

export default CreateUser
