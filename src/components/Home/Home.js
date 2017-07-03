import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Login from '../Login';

class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Login />
        <button>Register</button>
      </div>
    )
  }
}

export default withStyles(Home, s);
