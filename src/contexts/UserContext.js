import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
export const UserContext = createContext();

export const UserAuth = ({children}) => {
  // const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  // Deslogando
  const userLogout = React.useCallback(async () => {
    // setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('@nave:token');
    window.localStorage.removeItem('@nave:id');
    history.push('/login');
  }, [history]);

  // Login automático
  React.useEffect(() => {
    async function automaticLogin() {

      const token = window.localStorage.getItem('@nave:token');
      const id = window.localStorage.getItem('@nave:id');

      if(token && id) {
        try {
          setError(null);
          setLoading(true);
          setLogin(true);
          history.push('/');

        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }

      } else {
        setLogin(false);
      }
    }

    automaticLogin();
  },[history, userLogout])

  // Logando
  async function userLogin(email, password) {
    const user = { email, password }

    try {
      setError(null);
      setLoading(true);

      const response = await api.post('/users/login', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const { token } = response.data;
      const { id } = response.data;

      window.localStorage.setItem('@nave:token', token);
      window.localStorage.setItem('@nave:id', id);

      if(response.status === 200) {
        setLogin(true);
        history.push('/');
      } 

    } catch (error) {
      setError(error.message = 'Dados incorretos!');
      setLogin(false);

    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ 
      userLogin, 
      userLogout, 
      // data, 
      error, 
      loading, 
      login 
    }}>
      {children}
    </UserContext.Provider>
  )
}