import React from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import CardNaver from '../../components/CardNaver';

import { Section } from './styles';
import { Link } from 'react-router-dom';

const Home = () => {
  const [navers, setNavers] = React.useState(null);

  React.useEffect(() => {
    async function getNavers() {
      
      const token = window.localStorage.getItem('@nave:token')  
      const id = window.localStorage.getItem('@nave:id')  
      
      try {
        if(token && id) {
          const response = await api.get('/navers', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          setNavers(response.data)
        }   
      } catch (error) {
        console.log(error) 
      }
    }

    getNavers();
  },[]);

  return (
    <>
      <Header />
      
      <Section>
        <div className='top-section'>
          <h1>Navers</h1>

          <Link to='/add-naver'>
            <Button>
              Adicionar Naver    
            </Button>
          </Link>

        </div>

        <div className='cards-navers'>
          {navers && navers.map(naver => (
            <CardNaver  
              key={naver.id}
              id={naver.id}
              job_role={naver.job_role}
              admission_date={naver.admission_date}
              birthdate={naver.birthdate}
              project={naver.project}
              name={naver.name}
              url={naver.url}
            />
          ))
            
          }
        </div>
      </Section>
      
      {console.log(navers)}

    </>
  )
}

export default Home;
