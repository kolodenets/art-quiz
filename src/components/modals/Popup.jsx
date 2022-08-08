import React from 'react';
import styles from './Popup.module.css'

const Popup = ({active, children}) => {
  return (
    <div className={active ? [styles.modal, styles.active].join(' ') : styles.modal}  >
      <div className={active ? [styles.modal__content, styles.active].join(' ') : styles.modal__content}>
        {children}
      </div>
    </div>
  );
};

export default Popup;