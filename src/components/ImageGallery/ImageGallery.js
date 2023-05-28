import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {data.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onClick(image.id)}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
