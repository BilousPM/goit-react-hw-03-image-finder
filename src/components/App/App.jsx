import React, { Component } from 'react';

import { getImages } from '../../services/get_images';
import { PER_PAGE } from '../../services/get_images';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Btn from '../Button/Button';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    queryValue: '',
    page: 1,
    isLoading: false,
    errorMesage: '',
    selectedImage: null,
    showBtn: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const page = this.state.page;
    const query = this.state.queryValue;
    const pictures = this.state.pictures;

    if (prevState.queryValue !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      getImages(query, page)
        .then(res => res.json())
        .then(images =>
          this.setState({
            pictures: images.hits,
            showBtn: page < Math.ceil(images.totalHits / PER_PAGE),
          })
        )
        .then(images =>
          this.setState(prevState => {
            return {
              pictures: [...pictures, ...prevState.pictures],
            };
          })
        )
        .catch(eror => {
          this.setState({ errorMesage: 'Something went wrong' });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  formSubmitHendler = searchQuery => {
    this.setState({
      queryValue: searchQuery,
      pictures: [],
    });
  };

  hendleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = imageId => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: imageId,
    }));
  };

  // renderModalImg = () => {
  //   const modalImg = pictures.find(image => {
  //     image.id === selectedImage;
  //   });
  //   if (!selectedImage) return;
  // };
  // const image.largeImageURL = modalImg

  render() {
    const { pictures, isLoading, errorMesage, showBtn, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler} />
        {isLoading && <Loader />}
        {errorMesage && <h2>{errorMesage}</h2>}
        {pictures.length > 0 && (
          <ImageGallery data={pictures} onClick={this.toggleModal} />
        )}
        {showBtn && <Btn onClick={this.hendleLoadMore} />}
        {showModal && (
          <Modal onClick={this.toggleModal}>
            {/* <img scr={this.largeImageURL} /> */}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
