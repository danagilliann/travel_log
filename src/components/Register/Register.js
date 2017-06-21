import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

class Register extends React.Component {
  render() {
    return (
      <p>Now with classes</p>
    );
  }
}

export default withStyles(Register, s);
