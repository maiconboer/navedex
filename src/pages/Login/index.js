import React from 'react';

import {UserContext} from '../../contexts/UserContext';
import useValidatorField from '../../hooks/useValidatorField';
import logoImg from '../../assets/images/logo.svg';
import Head from '../../components/Head';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container} from './styles';

const Login = () => {
  const {userLogin, error} = React.useContext(UserContext)
  const email = useValidatorField('email');
  const password = useValidatorField();

  function handleLogin(event) {
    event.preventDefault();
    userLogin(email.value, password.value);
  }

  return (
    <Container>
      <Head title='Login' />
      <div>
        <img src={logoImg} alt='Nave.rs'/>

        <form onSubmit={handleLogin}>
          <Input 
            label='Email'
            type='email'
            id='email'
            name='email'
            placeholder='E-mail'
            required
            {...email}
          />

          <Input 
            label='Senha'
            type='password'
            id='password'
            name='password'
            placeholder='Senha'
            required
            {...password}
          />

          <Button type='submit'>Entrar</Button>
          
          {error && <p className='error-login'>{error}</p>}
        </form>
      </div>
    </Container>
  )
}

export default Login;
