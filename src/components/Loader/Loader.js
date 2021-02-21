import React from 'react';
import LoaderLib from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <LoaderLib
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loader;
