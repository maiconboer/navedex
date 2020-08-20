import React from 'react';
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';

import {NaversContext} from '../../contexts/NaversContext';
import { stylesModalConfirmation } from '../../utils/customStylesModal'
import { formatDateUS, formatDateBR } from '../../utils/formatDate';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiChevronLeft } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { Section } from './styles';

const EditNaver = () => {
  const {showNaver, editNaver} = React.useContext(NaversContext);
  const [modalConfirmationIsOpen, setModalConfirmationIsOpen] = React.useState(false);
  const history = useHistory();

  const [name, setName] = React.useState('');
  const [job_role, setJob_role] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [admission_date, setAdmission_date] = React.useState('');
  const [project, setProject] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [loading, setloading] = React.useState(true)

  React.useEffect(() => {
  
    async function handleGetNaver() {
      let mounted = true;

      const naver = await showNaver();
      if(mounted) {
        setloading(false);
      }

      setName(naver.name);
      setJob_role(naver.job_role);
      setBirthdate(formatDateUS(naver.birthdate));
      setAdmission_date(formatDateUS(naver.admission_date));
      setProject(naver.project);
      setUrl(naver.url);
      
      return function cleanup() {
        mounted = false
      }
    }

    handleGetNaver();   
  }, [showNaver])

  async function handleEditNaver(event) {
    event.preventDefault();
    const id = window.location.pathname.split('/edit-naver/')[1];  

    const editedNaver = {
      name,
      job_role,
      birthdate: formatDateBR(birthdate),
      admission_date: formatDateBR(admission_date),
      project,
      url
    }

    const statusCode = await editNaver(editedNaver, id)
  
    if(statusCode === 200) {
      setModalConfirmationIsOpen(true);
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
            Editar Naver
          </p>
          <form onSubmit={handleEditNaver}>

          {loading ? <p>Carregando...</p> :
            <>
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
           </> }</form>

          <Modal 
            isOpen={modalConfirmationIsOpen}
            onRequestClose={closeModalConfirmation}
            style={stylesModalConfirmation}
            contentLabel="Modal Naver"
          >
            <div className='modal-confirmation'>  
              <div>
                <p>Naver atualizado</p>
                <p>Naver atualizado com sucesso!</p>
              </div>

              <FiX size={20} onClick={closeModalConfirmation} />
            </div>
          </Modal>
        </Section>
    </>
  )
}

export default EditNaver;
