import React from "react";
import { Formik, Form, Field } from "formik";
import useTodo from "../../hook";
import ListTask from "../ListTask"

const Forma = () => {
  const { addTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="+" />
        </Form>
      </Formik>
    </>
  );
};

export default Forma;
