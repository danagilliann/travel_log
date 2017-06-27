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
      forbiddenWords: ['password', 'user', 'username'],
      typeText: "text",
      typePassword: "password"
    };

    this.textChange = this.textChange.bind(this);
  }

  handleSubmit(evt) {
    alert('Hi');
    event.preventDefault();
  }

  textChange(evt) {
    let id = evt.target.id;
    let type = evt.target.type;

    this.setState({
        [id]: evt.target.value,
        typeText: 'password'
        // () => {
        //   if (id === 'password' ||
        //     id === 'confirmPassword') {
        //     return 'password';
        //   } else {
        //     return type;
        //   }
        // }
    });
  }

  render() {
    return (
      <div className={s.registerForm}>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <p><input className={s.input} id="email" onChange={this.textChange} type={this.state.typeText} value={this.state.email} /></p>
          <p><input className={s.input} id="name" onChange={this.textChange} type={this.state.typeText} value={this.state.name} /></p>
          <p><input className={s.input} id="password" onChange={this.textChange} type={this.state.typeText} value={this.state.password} /></p>
          <p><input className={s.input} id="confirmPassword" onChange={this.textChange} type={this.state.typeText} value={this.state.confirmPassword} /></p>

          <input className={s.submit} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(Register, s);
