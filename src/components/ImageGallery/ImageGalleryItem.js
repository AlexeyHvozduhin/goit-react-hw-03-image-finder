import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

export const ImageGalleryItem = ({ element }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openImageModal = () => {
    setModalIsOpen(true);
  };

  const closeImageModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <li className="gallery-item ImageGalleryItem" onClick={openImageModal}>
        <img
          src={element.webformatURL}
          width={'50px'}
          alt={`Image: ${element.tags}`}
          className="ImageGalleryItem-image"
        />
      </li>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeImageModal}
        imageUrl={element.largeImageURL}
      />
    </>
  );
};
