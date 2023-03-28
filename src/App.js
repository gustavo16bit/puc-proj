import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      this.setState({ message: 'Acessado com sucesso!' });
    } else {
      this.setState({ message: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit">Acessar</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Login;
