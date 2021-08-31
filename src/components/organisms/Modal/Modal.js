import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';
import PropTypes from 'prop-types';
const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, buttonText, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);
  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}

      <Button isBig onClick={handleClose}>
        {buttonText}
      </Button>
    </ModalWrapper>,
    modalNode
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;
