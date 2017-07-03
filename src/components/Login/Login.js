import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "Email",
      password: "Password",
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
        return ['textType', 'text'];
      }
  }

  render() {
    return (
        <div className={s.loginForm}>
          <h1>Login</h1>
          <form onSubmit={this.submitHandler}>
            <p><input className={s.input} id="email" onChange={this.textChange} type={this.state.textType} value={this.state.email} /></p>
            <p><input className={s.input} id="password" onChange={this.textChange} type={this.state.passwordType} value={this.state.password} /></p>
            <input className={s.submit} type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

export default withStyles(Login, s);
