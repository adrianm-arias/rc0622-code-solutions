import React from 'react';

class AppDrawer extends React.Component {
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
    if (!this.state.toggleOn) {
      return (
        <div className='nav-wrapper'>
          <i className="fa-solid fa-bars menu-icon" onClick={this.handleClick}></i>
        </div>
      );
    } else {
      return (
        <div className='bg-overlay'>
          <div className='nav-wrapper'>
            <div>
              <a href="#" className='nav-logo' onClick={this.handleClick}>MENU</a>
            </div>
            <div>
              <ul className='nav-link-wrapper'>
                <a href="#" className='nav-link' onClick={this.handleClick}>
                  <li className='nav'>About</li>
                </a>
                <a href="#" className='nav-link' onClick={this.handleClick}>
                  <li className='nav'>Get Started</li>
                </a>
                <a href="#" className='nav-link' onClick={this.handleClick}>
                  <li className='nav'>Sign In</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default AppDrawer;
