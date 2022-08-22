import React from "react";
import { Form, Formik } from "formik";
import InputInLabel from "../InputLabel";
import {SCHEMA_SING_IN} from '../../utils/validateSchemas';
import styles from "./SingInForm.module.scss";

const initialValues = {
  login:"",
  password: ""
};


const LogInForm = (props) => {
  return (
    <Formik>
      initialValues={initialValues}
      onSubmit = {props.onSubmit}
      validationSchema={SCHEMA_SING_IN}
      {(formikProps) => {
        return(
          <Form className={styles.form}>
            <InputInLabel name = "email" type="email"/>
            <InputInLabel name = "password"/>
            <input type="submit"/>
            <input type="reset"/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
