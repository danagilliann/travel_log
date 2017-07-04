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
        <p>If you don't have an account, register here</p>
      </div>
    )
  }
}

export default withStyles(Home, s);
