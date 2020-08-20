import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido'
  },
  password: {
    regex: /^.{6,}$/,
    message: 'A senha necessita ter pelo menos 6 caracteres'
  },
  name: {
    regex: /^.{3,}$/,
    message: 'Ao menos 3 caracteres'
  },
  job_role: {
    regex: /^.{3,}$/,
    message: 'Ao menos 3 caracteres'
  },
  url: {
    regex: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/,
    message: '> http://'
  },
};

const useValidatorField = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validation(value) {
    if(type === false) return true;

    if(value.length === 0) {
      setError('Preenchimento obrigatório.');
      return false;
      
    } else if (types[type] && !types[type].regex.test(value)) {
        setError(types[type].message);
        return false;
        
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if(error) {
      validation(target.value);
    }
    
    setValue(target.value);
  }

  return {
    value, 
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value)
  }
}

export default useValidatorField;