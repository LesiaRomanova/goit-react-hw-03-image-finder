import React, { Component } from 'react';
import pixabeyApi from './services/pixabey-api';

import Searchbar from './components/Searchbar/';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isOpenModal: false,
    isLoading: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  openModal = modalImage => {
    console.log(modalImage);
    this.setState({ isOpenModal: true, modalImage });
    window.addEventListener('keydown', this.closeModal);
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.keyCode === 27)
      this.setState({ isOpenModal: false });
    window.removeEventListener('keydown', this.closeModal);
  };

  // toggleModal = e => {
  //   this.state(({ isOpenModal }) => ({
  //     isOpenModal: !isOpenModal,
  //     modalImage: e,
  //   }));
  // };
  fetchImageGallery = searchQuery => {
    const { page } = this.state;

    this.setState({ ...this.state, isLoading: true, searchQuery });

    pixabeyApi
      .fetchImageGallery(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          ...prevState,
          images: images,
          page: 2,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    const { searchQuery, page } = this.state;
    pixabeyApi.fetchImageGallery(searchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  render() {
    const { images, isOpenModal, isLoading, modalImage } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.fetchImageGallery} />
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button changePage={this.changePage} />}
        {isOpenModal && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
