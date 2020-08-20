import React from 'react';

import { InputElement, Label } from './styles';

const Input = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  error, 
  onBlur,
  ...rest
}) => {
  
  return (
    <>
      <Label htmlFor={name}>{label} 
      {error && <span className='error'> - {error}</span>}
      </Label>
      <InputElement
        type={type} 
        id={name} 
        name={name} 
        value={value}
        onChange={onChange}  
        onBlur={onBlur}
        {...rest}
      />
    </>
  )
}

export default Input;