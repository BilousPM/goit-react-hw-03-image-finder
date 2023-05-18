import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    pictures: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.queryValue !== this.props.queryValue) {
      fetch(
        `https://pixabay.com/api/?key=34841382-75c0b952d5537088e5e81e69b&q=${this.props.queryValue}&image_type=photo&orientation=horizontal&safesearch=false&per_page=12&page=1`
      )
        .then(res => res.json())
        .then(console.log)
        .then(pictures => this.setState({ pictures }));
    }
  }

  render() {
    // console.log(`hi ${this.props.queryValue}`);
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem pictures={this.state.pictures} />
      </ul>
    );
  }
}

// const ImageGallery = ()=>{
//   return (
//     <ul className={css.gallery}></ul>
//   )
// };

export default ImageGallery;
