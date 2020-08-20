import React from 'react';
import Modal from 'react-modal';
import {Link, useHistory} from 'react-router-dom';

import Head from '../../components/Head';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {NaversContext} from '../../contexts/NaversContext';
import useValidatorField from '../../hooks/useValidatorField';
import {stylesModalConfirmation} from '../../utils/customStylesModal'
import {formatDateBR} from '../../utils/formatDate';
import {FiX} from 'react-icons/fi';
import {FiChevronLeft} from 'react-icons/fi';
import {Section} from './styles';

const AddNaver = () => {
  const {addNaver, setNoNaverRegistered} = React.useContext(NaversContext);
  const history = useHistory();

  const name = useValidatorField('name');
  const job_role = useValidatorField('job_role');
  const url = useValidatorField('url');
  const [birthdate, setBirthdate] = React.useState('');
  const [admission_date, setAdmission_date] = React.useState('');
  const [project, setProject] = React.useState('');
  const [modalConfirmationIsOpen, setModalConfirmationIsOpen] = React.useState(false);

  async function handleAddNaver(event) {
    event.preventDefault();

    const newNaver = {
      name: name.value,
      job_role: job_role.value,
      birthdate: formatDateBR(birthdate),
      admission_date: formatDateBR(admission_date),
      project,
      url: url.value
    }

    if(name.validation() && job_role.validation() && url.validation()) {
      const statusCode = await addNaver(newNaver);

      if(statusCode === 200) {
        setNoNaverRegistered(false);
        setModalConfirmationIsOpen(true);
      }
    }
  }

  const closeModalConfirmation= React.useCallback(() => {
    setModalConfirmationIsOpen(false);
    history.push('/');
  },[history])

  return (
    <>
      <Head title='Add Naver' />
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
                placeholder='Nome...'
                required
                {...name}
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
                placeholder='Projetos que participou...'
                required
              />
            </div>

            <div>
              <Input 
                label='Cargo'
                type='text'
                id='job_role'
                name='job_role'
                placeholder='Cargo...'
                required
                {...job_role}
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
                label='URL - avatar'
                type='text'
                id='url'
                name='url'
                placeholder='URL da foto do avatar...'
                required
                {...url}
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
