import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import { Container } from './styles';

const Header = () => {
  const { userLogout } = React.useContext(UserContext)

  function handleLogout() {
    userLogout();
  }

  return (
    <Container>

      <img src={logoImg} alt='Nave.rs'/>
      <span onClick={handleLogout}>Sair</span>

    </Container>
  )
}

export default Header;
