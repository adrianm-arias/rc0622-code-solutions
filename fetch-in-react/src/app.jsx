import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userData => {
        this.setState({
          users: userData,
          isLoading: false
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
