import React from 'react';
import SingUpForm from '../components/SingUpForm';
import styles from "./PageHeader.module.scss";


const SingUp = () => {
  return (
    <>
          <h1 className={styles.header}>LOGIN TO YOUR ACCAUNT</h1>
          <SingUpForm/>
    </>
  );
}

export default SingUp;
