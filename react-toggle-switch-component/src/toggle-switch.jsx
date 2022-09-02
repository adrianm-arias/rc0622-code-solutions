import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: false,
      text: false,
      background: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonColor: !this.state.buttonColor,
      text: !this.state.text,
      background: !this.state.background
    });
  }

  render() {
    return (
      <div className={this.state.background ? 'div-on' : 'div-off'}>
        <button
          className={`btn ${this.state.buttonColor ? 'btn-on' : 'btn-off'}`}
        onClick={this.handleClick}>
        </button>
        <p className='text'>{this.state.text ? 'on' : 'off'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
