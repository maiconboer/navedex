import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import Modal from 'react-modal';

import api from '../../services/api';
import { stylesModalConfirmation } from '../../utils/customStylesModal'
import formatDate from '../../utils/formatDate';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiX } from 'react-icons/fi';
import { Section } from './styles';

const AddNaver = () => {
  const [name, setName] = React.useState('');
  const [job_role, setJob_role] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [admission_date, setAdmission_date] = React.useState('');
  const [project, setProject] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [modalConfirmationIsOpen, setModalConfirmationIsOpen] = React.useState(false);
  const history = useHistory();

  async function handleAddNaver(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('@nave:token')  
    const id = window.localStorage.getItem('@nave:id')  

    try {
      if(token && id) {
        const newNaver = {
          name,
          job_role,
          birthdate: formatDate(birthdate),
          admission_date: formatDate(admission_date),
          project,
          url
        }
  
        const response = await api.post('/navers', newNaver, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if(response.status === 200) {
          setModalConfirmationIsOpen(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function closeModalConfirmation() {
    setModalConfirmationIsOpen(false);
    history.push('/');
  }

  return (
    <>
      <Header />
        <Section>

          <p>
            <Link to='/'><FiChevronLeft size={28} /></Link>
            Adicionar Naver
          </p>
          <form onSubmit={handleAddNaver}>

            <div>
              <Input 
                label='Nome'
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={({target}) => setName(target.value)}
                placeholder='Nome'
                required
              />

              <Input 
                label='Idade (nascimento)'
                type='date'
                id='birthdate'
                name='birthdate'
                value={birthdate}
                onChange={({target}) => setBirthdate(target.value)}
                required
              />   

              <Input 
                label='Projetos que participou'
                type='text'
                id='project'
                name='project'
                value={project}
                onChange={({target}) => setProject(target.value)}
                placeholder='Projetos que participou'
                required
              />
            </div>

            <div>
              <Input 
                label='Cargo'
                type='text'
                id='job_role'
                name='job_role'
                value={job_role}
                onChange={({target}) => setJob_role(target.value)}
                placeholder='Cargo'
                required
              />

              <Input 
                label='Tempo de empresa - (início)'
                type='date'
                id='admission_date'
                name='admission_date'
                value={admission_date}
                onChange={({target}) => setAdmission_date(target.value)}
                required
              />

              <Input 
                label='URL da foto do avatar'
                type='text'
                id='url'
                name='url'
                value={url}
                onChange={({target}) => setUrl(target.value)}
                placeholder='URL da foto do avatar'
                required
              />
            </div>
            
            <Button type='submit'>Salvar</Button>
          </form>

          <Modal 
            isOpen={modalConfirmationIsOpen}
            onRequestClose={closeModalConfirmation}
            style={stylesModalConfirmation}
            contentLabel="Modal Naver"
          >
            <div className='modal-confirmation'>
              
              <div>
                <p>Naver Criado</p>
                <p>Naver criado com sucesso!</p>
              </div>

              <FiX size={20} onClick={closeModalConfirmation} />
            </div>
          </Modal>

        </Section>
    </>
  )
}

export default AddNaver;
