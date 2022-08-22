import * as Yup from "yup";

export const SCHEMA_NAME = Yup.string("Must be string")
  .matches(/^[A-Z][a-z]{1,16}$/, "Invalid string")
  .required("Must be required");

export const SCHEMA_EMAIL = Yup.string("Must be string")
  .email("Invalid email")
  .required("Must be required");

export const SCHEMA_PASSWORD = Yup.string("Must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    "Invalid password"
  )
  .required("Must be required");

export const SCHEMA_REGISTRATION = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  dname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  passwordconfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password not equal"
  ),
});

export const SCHEMA_SIGN_IN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
});
