import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }

  render() {
    const counter = this.state.clickCounter;
    let buttonColor = '';
    if (counter < 4) {
      buttonColor = 'btn-voilet';
    } else if (counter < 7) {
      buttonColor = 'btn-purple';
    } else if (counter < 10) {
      buttonColor = 'btn-coral';
    } else if (counter < 13) {
      buttonColor = 'btn-orange';
    } else if (counter < 16) {
      buttonColor = 'btn-yellow';
    } else if (counter < 19) {
      buttonColor = 'btn-white';
    }
    return <button
      className={`btn ${buttonColor}`}
      onClick={this.handleClick}>
      Hot Button
      </button>;
  }
}

export default HotButton;
