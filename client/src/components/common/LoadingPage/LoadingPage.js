import React from 'react';
import styles from './LoadingPage.module.scss';
import Spinner from 'react-bootstrap/Spinner';

const LoadingPage = () => {
  return (
    <div className={styles.Spinner}>
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default LoadingPage;
