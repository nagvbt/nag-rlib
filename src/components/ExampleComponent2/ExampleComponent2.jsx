import React from 'react';
import PropTypes from 'prop-types';
import './ExampleComponent2.css';

function ExampleComponent2({ text }) {
  return <div className='test'>Example Component 2: {text}</div>;
}

ExampleComponent2.propTypes = {
  text: PropTypes.string
};

ExampleComponent2.defaultProps = {
  text: ''
};

export default ExampleComponent2;
