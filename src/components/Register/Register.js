import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
      password: null,
      confirmPassword: null,
      forbiddenWords: ['password', 'user', 'username']
    };
  }

  render() {
    return (
      <div className={s.registerForm}>
        <form readOnly> {/* add the ff: onSubmit={this.saveAndCountinue} */}
          <p>
            Email:
            <input type="text" value={this.state.email}/>
          </p>
          <p>
            Name:
            <input type="text" value={this.state.name}/></p>
          <p>
            Password:
            <input type="text" value={this.state.password}/>
          </p>
          <p>
            Confirm Password:
            <input type="text" value={this.state.confirmPassword}/>
          </p>
        </form>
      </div>
    );
  }
}

export default withStyles(Register, s);
