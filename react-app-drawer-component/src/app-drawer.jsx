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
        <div className='bg' onClick={this.handleClick}>
          <nav className=''>
            <i className="fa-solid fa-bars menu-icon" onClick={this.handleClick}></i>
          </nav>
        </div>
      );
    } else {
      return (
        <div className='bg-overlay' onClick={this.handleClick}>
          <nav className='nav-wrapper'>
            <h1 className='nav-logo' onClick={this.handleClick}>MENU</h1>
            <ul className='nav-link-wrapper'>
              <li className='nav-link' onClick={this.handleClick}>About</li>
              <li className='nav-link' onClick={this.handleClick}>Get Started</li>
              <li className='nav-link' onClick={this.handleClick}>Sign In</li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
export default AppDrawer;
