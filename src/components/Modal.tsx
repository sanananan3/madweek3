import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void; // 모달을 닫는 함수
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
