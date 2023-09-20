import React from 'react';
import Modal from 'react-modal';

// Установите корневой элемент вашего приложения
Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
          overflowY: 'hidden', // Отключает вертикальный скролл
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          maxWidth: '80vw',
          maxHeight: '80vh',
          padding: 0,
          overflowY: 'hidden',
        },
      }}
    >
      <img
        src={imageUrl}
        alt="Modal"
        style={{
          width: '100%',
          height: 'auto', // Это позволит изображению сохранять соотношение сторон
          maxWidth: '100%', // Изображение не будет шире контейнера
          maxHeight: '90vh', // Изображение не будет выше контейнера
        }}
      />
      <button
        onClick={onRequestClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        &times;
      </button>
    </Modal>
  );
};
