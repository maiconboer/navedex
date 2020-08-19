import React from 'react';

import {UserContext} from '../../contexts/UserContext';

import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container} from './styles';

const Login = () => {
  const {userLogin, error} = React.useContext(UserContext)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin(event) {
    event.preventDefault();
    userLogin(email, password);
  }

  return (
    <Container>
      <div>
        <img src={logoImg} alt='Nave.rs'/>

        <form onSubmit={handleLogin}>
          <Input 
            label='Email'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
            placeholder='E-mail'
            required
          />

          <Input 
            label='Senha'
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={({target}) => setPassword(target.value)}
            placeholder='Senha'
            required
          />

          

          <Button type='submit'>Entrar</Button>
          {error && <span>{error}</span>}
        </form>
      </div>
    </Container>
  )
}

export default Login;
