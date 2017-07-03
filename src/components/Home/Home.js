import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <button>Register</button>
        <button>Login</button>
      </div>
    )
  }
}

export default withStyles(Home, s);
