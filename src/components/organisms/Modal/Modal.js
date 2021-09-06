import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ModalWrapper } from './Modal.styles';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, buttonText, children, isOpen }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button isBig onClick={handleClose}>
        {buttonText}
      </Button>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;
