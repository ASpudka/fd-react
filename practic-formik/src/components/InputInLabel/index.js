import React from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./InputInLabel.module.scss";
import cx from "classnames";

const InputInLabel = (props) => {
  const { name, ...restProps } = props;
  return (
    <label>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(styles.input, {
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input {...field} className={inputClasses} {...restProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputInLabel;
