/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange() {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange() {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input type='text' value={this.state.username} placeholder='enter username' onChange={this.handleUsernameChange} />
        </label>
        <label>
          Password
          <input type='password' value={this.state.password} placeholder='enter password' onChange={this.handlePasswordChange} />
        </label>
        <button type='submit' value='Submit'>Log In</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
