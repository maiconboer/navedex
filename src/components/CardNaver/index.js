import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { 
  stylesModalNaver, 
  stylesModalDeleteNaver, 
  stylesModalConfirmation 
} from '../../utils/customStylesModal'

import Button from '../Button';
import { FiX } from 'react-icons/fi';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Card } from './styles';

Modal.setAppElement('#root')

const CardNaver = ({
  id, 
  job_role, 
  admission_date, 
  birthdate,
  project, 
  name, 
  url
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false);
  const [modalConfirmationIsOpen, setModalConfirmationIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModalDelete() {
    setModalDeleteIsOpen(true)
  }

  function closeModalDelete() {
    setModalDeleteIsOpen(false);
  }

  function closeModalConfirmation() {
    setModalConfirmationIsOpen(false);
  }

  async function handleDeleteNaver(id) {

    const token = window.localStorage.getItem('@nave:token')

    try {
      const response = await api.delete(`/navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if(response.status === 200) {
        setModalDeleteIsOpen(false);
        setModalConfirmationIsOpen(true)
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <div className='wrapper'> 
        <img src={url} alt={name} onClick={openModal} />

        <div>
          <p className='name'>{name}</p>
          <p className='job_role'>{job_role}</p>

          <span>
            <FaTrash size={16}  onClick={openModalDelete} />
          </span>

          <span>
            <Link to='/edit-naver'> <FaPen size={16} /> </Link>  
          </span>
        </div>
      </div>
  
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={stylesModalNaver}
        contentLabel="Modal Naver"
      >

        <div className='modal-naver'>
          <div className='image'>
            <img src={url} alt={name}/>
          </div>

          <div className='informations'>
            <h3>{name}</h3>
            <p>{job_role}</p>

            <span>Idade</span>
            <p>{birthdate}</p>

            <span>Tempo de empresa</span>
            <p>{admission_date}</p>

            <span>Projetos que participou</span>
            <p>{project}</p>

            <div className='buttons-delete-edit'>
              <span>
                <FaTrash size={16} onClick={openModalDelete} />
              </span>

              <span>
                <Link to='/edit-naver'> <FaPen size={16} /> </Link>  
              </span>
            </div>
          </div>
        </div>     
      </Modal>

      <Modal 
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeModalDelete}
        style={stylesModalDeleteNaver}
        contentLabel="Modal Naver"
      >
        <div className='modal-delete'>
          <p>Excluir Naver</p>
          <p>Tem certeza que deseja excluir este Naver?</p>

          <div>
            <Button onClick={closeModalDelete}>Cancelar</Button>
            <Button onClick={() => handleDeleteNaver(id)}>Excluir</Button>
          </div>

        </div>
        
      </Modal>

      <Modal 
        isOpen={modalConfirmationIsOpen}
        onRequestClose={closeModalConfirmation}
        style={stylesModalConfirmation}
        contentLabel="Modal Naver"
      >
        <div className='modal-confirmation'>
          
          <div>
            <p>Naver excluído</p>
            <p>Naver excluído com sucesso!</p>
          </div>

          <FiX size={20} onClick={closeModalConfirmation} />
        </div>
      </Modal>

    </Card>
  )
}

export default CardNaver;


