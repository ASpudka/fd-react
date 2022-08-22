import React from "react";
import { Form, Formik } from "formik";
import InputInLabel from "../InputInLabel";
import styles from "../Form.module.scss";
import {SCHEMA_REGISTRATION} from '../../utils/validateSchemas.js'

const RegistrationForm = () => {
  const initialValues = {
    fname: "",
    lname: "",
    dname: "",
    email: "",
    password: '',
    passwordconfirm:'',

  };
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit = {onSubmit}
      validateSchemas = {SCHEMA_REGISTRATION}>
      {(formikProps) => {
        return (
          <Form className={styles.container}>
           <InputInLabel name='fname' type = 'text' placeholder='First name'/>
           <InputInLabel name='lname' type = 'text' placeholder='Last name'/>
           <InputInLabel name='dname' type = 'text' placeholder='Display name'/>
           <InputInLabel name='email' type = 'email' placeholder='Email Address'/>
           <InputInLabel name='password' type = 'password' placeholder='Password'/>
           <InputInLabel name='passwordconfirm' type = 'password' placeholder='Password Confirmation'/>
           <input type="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
