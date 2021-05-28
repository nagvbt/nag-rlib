import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles.module.css';

function ExampleComponent2({ text }) {
  return <div className={styles.test}>Example Component 2: {text}</div>;
}

ExampleComponent2.propTypes = {
  text: PropTypes.string
};

ExampleComponent2.defaultProps = {
  text: ''
};

export default ExampleComponent2;
