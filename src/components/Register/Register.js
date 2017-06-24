import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Email",
      name: "Name",
      password: "Password",
      confirmPassword: "Confirm Password",
      forbiddenWords: ['password', 'user', 'username']
    };
  }

  handleSubmit(evt) {
    alert('Hi');
    event.preventDefault();
  }

  render() {
    return (
      <div className={s.registerForm}>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <p><input className={s.input} type="text" value={this.state.email} /></p>
          <p><input className={s.input} type="text" value={this.state.name} /></p>

          <p><input className={s.input} type="text" value={this.state.password} /></p>

          <p><input className={s.input} type="text" value={this.state.confirmPassword} /></p>

          <input className={s.submit} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(Register, s);
