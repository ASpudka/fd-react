import * as Yup from 'yup';

export const SCHEMA_NAME = Yup.string('Mast be string').matches(/^[A-Z][a-z]{1,16}$/, 'Invalid string').required('Must be required');

export const SCHEMA_EMAIL = Yup.string('Mast be string').email('Invalid email').required('Must be required');

export const SCHEMA_PASSWORD = Yup.string('Must be string').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9].{8,16})$/).required('Must be required');

export const SCHEMA_SING_UP = Yup.object({
  fname: SCHEMA_NAME,
  lname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  age: Yup.number().min(18).max(80).required()

});

export const SCHEMA_SING_IN = Yup.object({
    email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
 });

 export const SCHEMA_CONTACTS = Yup.object({
  fname: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
})