import React from "react";
import { Form, Formik, Field } from "formik";
import InputInLabel from "../InputInLabel";
import styles from "../Form.module.scss";
import { SCHEMA_SIGN_IN } from "../../utils/validateSchemas";

const SingUpForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_SIGN_IN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <div >
            <InputInLabel
              name="email"
              type="email"
              placeholder="Email Address"
            /></div>
            <div>
            <InputInLabel
              name="password"
              type="password"
              placeholder="Password"
            /></div>
            <input type="submit"  className={styles.btn}/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SingUpForm;
