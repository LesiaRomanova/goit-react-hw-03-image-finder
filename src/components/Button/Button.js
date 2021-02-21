import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ changePage }) => {
  return (
    <button type="button" onClick={changePage} className="Button">
      Load More
    </button>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
export default Button;
// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
