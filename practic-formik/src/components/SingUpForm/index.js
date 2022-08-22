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
      validateSchemas={[SCHEMA_SIGN_IN]}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <InputInLabel
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <InputInLabel
              name="password"
              type="password"
              placeholder="Password"
            />
            <input type="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SingUpForm;
