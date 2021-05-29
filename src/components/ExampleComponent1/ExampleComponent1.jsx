import React from 'react';
import PropTypes from 'prop-types';
import './ExampleComponent1.css';

function ExampleComponent1({ text }) {
  return <div className='test'>Example Component 1: {text}</div>;
}

ExampleComponent1.propTypes = {
  text: PropTypes.string
};

ExampleComponent1.defaultProps = {
  text: ''
};
export default ExampleComponent1;
