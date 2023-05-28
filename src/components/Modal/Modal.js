import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { ThreeCircles } from 'react-loader-spinner';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // console.log('Component did mount');
    window.addEventListener('keydown', this.hendleEscapeKeyDown);
  }

  componentWillUnmount() {
    // console.log('Component did unmount');
    window.removeEventListener('keydown', this.hendleEscapeKeyDown);
  }

  hendleEscapeKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.hendleOverlayClick}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
