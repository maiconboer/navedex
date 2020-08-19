import React, {createContext} from 'react';

import api from '../services/api';
import {UserContext} from './UserContext';

export const NaversContext = createContext();

export const Navers = ({children}) => {
  const {authenticate} = React.useContext(UserContext);
  const [navers, setNavers] = React.useState([]);
  const [noNaverRegistered, setNoNaverRegistered] = React.useState(false);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {   
    if(authenticate) {
      setLoading(true);
      
      async function getNavers() {   
        const token = window.localStorage.getItem('@nave:token');  
        const id = window.localStorage.getItem('@nave:id');  
        
        try {
          if(token && id) {
            const response = await api.get('/navers', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
  
            setNavers(response.data);

            if(response.data.length === 0) {
              setNoNaverRegistered(true);
            }
          }

        } catch (error) {
          console.log(error) 

        } finally {
          setLoading(false);
        }
      }
      getNavers();
    }
  },[authenticate]);

  async function getNavers() {
    const token = window.localStorage.getItem('@nave:token');  
    const id = window.localStorage.getItem('@nave:id'); 
    
    try {
      setLoading(true);
      if(token && id) {
        const response = await api.get('/navers', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if(response.status === 200) {
          setLoading(false)
          setNavers(response.data);  
        }

        if(response.data.length === 0) {
          setNoNaverRegistered(true);
        }

        return response.status;
      }

    } catch (error) {
      console.log(error);
      
    }  finally {
      setLoading(false);
    }
  }

  async function addNaver(newNaver) {  
    const token = window.localStorage.getItem('@nave:token');  
    const id = window.localStorage.getItem('@nave:id');

    try {
      if(token && id) {   
        const response = await api.post('/navers', newNaver, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setNavers([...navers, response.data]);
        return response.status;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editNaver(editedNaver, id) {
    const token = window.localStorage.getItem('@nave:token');  
 
    try {
      if(token && id) {  
        const response = await api.put(`/navers/${id}`, editedNaver, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        getNavers();
        return response.status;
      }
    } catch (error) {
      console.log(error);
    }

  }

  async function deleteNaver(id) {
    const token = window.localStorage.getItem('@nave:token');  

    try {
      if(token) {
        const response = await api.delete(`/navers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // getNavers();
        return response.status;
      }    
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NaversContext.Provider value={{
      navers, 
      setNavers,
      getNavers,
      addNaver,
      editNaver,
      deleteNaver,
      loading,
      noNaverRegistered,
      setNoNaverRegistered
    }}>
      {children}
    </NaversContext.Provider>
  )
}