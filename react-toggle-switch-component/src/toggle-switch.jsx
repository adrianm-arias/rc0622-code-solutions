import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    return (
      <div className={this.state.toggleOn ? 'div-on' : 'div-off'}>
        <button
          className={`btn ${this.state.toggleOn ? 'btn-on' : 'btn-off'}`}
        onClick={this.handleClick}>
        </button>
        <p className='text'>{this.state.toggleOn ? 'on' : 'off'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
