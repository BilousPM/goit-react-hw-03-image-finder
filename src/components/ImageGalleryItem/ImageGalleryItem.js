import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  console.log(props);
  return (
    <li className={css.imageGalleryItem}>
      <img src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
