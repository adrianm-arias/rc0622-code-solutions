/* eslint-disable no-restricted-globals */
import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isFocused: false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

  }

  handlePasswordChange() {
    this.setState({ password: event.target.value });
  }

  handleFocus(event) {
    this.setState({ isFocused: true });
  }

  handleSubmit() {
    event.preventDefault();
    if (this.state.password.length === 0) {
      alert('A password is required');
    } else if (this.state.password.length < 8) {
      alert('Your password is too short');
    } else {
      this.setState({ password: '' });
    }

  }

  render() {
    const passwordLength = this.state.password.length;
    let errorMessage = '';
    const isFocused = this.state.isFocused;

    if (this.state.password === '') {
      errorMessage = 'A password is required.';
    } else if (passwordLength < 8) {
      errorMessage = 'Your password is too short.';
    } else {
      errorMessage = '';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='div'>
          <label className='label' htmlFor='name'>Password: </label>
        </div>
        <div>
          <input type='password' value={this.state.password} placeholder='enter password' onFocus={this.handleFocus} onChange={this.handlePasswordChange} />
          <i className={`fa-solid ${passwordLength < 8 ? 'fa-x' : 'fa-check'}`}></i>
        </div>
        <p className={`${isFocused ? '' : 'hidden'}`}>{errorMessage}</p>
      </form>
    );
  }
}

export default ValidatedInput;
