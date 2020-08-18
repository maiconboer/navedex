import React from 'react';

import { ButtonElement } from './styles';

const Button = ({type, onClick, children, ...rest}) => {
  return (
    <ButtonElement type={type} onClick={onClick} {...rest}>
      {children}
    </ButtonElement>
  )
}

export default Button;