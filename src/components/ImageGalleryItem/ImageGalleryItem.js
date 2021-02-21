import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(modalImage)}>
      <img src={url} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
