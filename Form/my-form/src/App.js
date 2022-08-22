import React from "react";
import { BrowserRouter } from "react-router-dom";
import LogInForm from "./components/LogInForm";

const App = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return <BrowserRouter>
    
      <LogInForm onSubmit={onSubmit} />
    
    </BrowserRouter>
};

export default App;
