import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      timerOn: false,
      timer: 0
    });

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
  }

  startWatch() {
    this.intervalID = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      });
    }, 1000);
  }

  stopWatch() {
    clearInterval(this.intervalID);
  }

  handleReset() {
    if (!this.state.timerOn) {
      clearInterval(this.intervalID);
      this.setState({
        timer: 0
      });
    }
  }

  handlePlay() {
    this.setState({
      timerOn: true
    });
    this.startWatch();
  }

  handlePause() {
    this.setState({
      timerOn: false
    });
    this.stopWatch();
  }

  render() {

    const isCounting = this.state.timerOn;
    const clock = this.state.timer;
    return (
        <div className='wrapper'>
          <div onClick={this.handleReset} className='circle'>
            <h1>{clock}</h1>
          </div>
          <div>
          <i onClick={!isCounting ? this.handlePlay : this.handlePause} className={`fa-solid ${!isCounting ? 'fa-play' : 'fa-pause'} icon`}></i>
          </div>
        </div>
    );
  }
}

export default Stopwatch;
