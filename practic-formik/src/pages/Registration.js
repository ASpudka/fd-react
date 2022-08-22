import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import styles from "./PageHeader.module.scss";

const Registration = () => {
  return (
    <>
      <h1 className={styles.header}>CREATE AN ACCOUNT</h1>
      <p>We always keep yuor name and email address private.</p>
      <RegistrationForm />
    </>
  );
};

export default Registration;
