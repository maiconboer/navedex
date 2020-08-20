import React from 'react';
import {Link} from 'react-router-dom';

import {NaversContext} from '../../contexts/NaversContext';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardNaver from '../../components/CardNaver';
import {Section} from './styles';

const Home = () => {
  const {navers, loading, noNaverRegistered} = React.useContext(NaversContext) 

  return (
    <>
      <Head title='Home' />
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

        {loading 
          ? <p className='loading'>Carregando...</p>
          : noNaverRegistered === true ? <p>Não há Navers cadastrados!</p> : '' 
        }
      </Section>
    </>
  )
}

export default Home;
