import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery ImageGallery">
      {images &&
        images.map(element => {
          return <ImageGalleryItem element={element} key={element.id} />;
        })}
    </ul>
  );
};
