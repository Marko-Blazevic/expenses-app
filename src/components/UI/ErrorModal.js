import Backdrop from '../UI/Backdrop';
import OverlayModal from './OverlayModal';
import React from 'react';
import ReactDOM from 'react-dom';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <OverlayModal onClick={props.onClick} />,
        document.getElementById('overlay-modal')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
