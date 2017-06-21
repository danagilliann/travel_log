import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email',
      name: 'name',
      password: 'pass',
      confirmPassword: 'pass2x',
      forbiddenWords: ['password', 'user', 'username']
    };
  }

  render() {
    return (
      <div className={s.registerForm}>
        <form> {/* add the ff: onSubmit={this.saveAndCountinue} */}
          <input type="text" value={this.state.email} />
        </form>
      </div>
    );
  }
}

export default withStyles(Register, s);
