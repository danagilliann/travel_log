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
      textType: "text",
      passwordType: 'text',
      confirmPasswordType: 'text',
    };
  }

  // TODO: Improve this
  submitHandler = (evt) => {
    alert('Hi');
    event.preventDefault();
  }

  textChange = (evt) => {
    let id = evt.target.id;
    let typeArray = this.typeHandler(id);
    let typeVariable = typeArray[0];
    let typeValue = typeArray[1];

    console.log(typeVariable, ":", typeValue);

    this.setState({
        [id]: evt.target.value,
        [typeVariable]: typeValue,
    });
  }

  typeHandler = (id) => {
    if (id === 'password') {
      return ['passwordType', 'password'];
    } else if (id === 'confirmPassword') {
      return ['confirmPasswordType', 'password'];
    } else {
      // console.log('in other', type);
      return ['textType', 'text'];
    }
  }

  render() {
    return (
      <div className={s.registerForm}>
        <h1>Register</h1>
        <form onSubmit={this.submitHandler}>
          <p><input className={s.input} id="email" onChange={this.textChange} type={this.state.textType} value={this.state.email} /></p>
          <p><input className={s.input} id="name" onChange={this.textChange} type={this.state.textType} value={this.state.name} /></p>
          <p><input className={s.input} id="password" onChange={this.textChange} type={this.state.passwordType} value={this.state.password} /></p>
          <p><input className={s.input} id="confirmPassword" onChange={this.textChange} type={this.state.confirmPasswordType} value={this.state.confirmPassword} /></p>

          <input className={s.submit} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(Register, s);
