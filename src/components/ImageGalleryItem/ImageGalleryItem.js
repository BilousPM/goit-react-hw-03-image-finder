import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image: { webformatURL, tags }, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
};
export default ImageGalleryItem;
