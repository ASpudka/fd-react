import React, { Component } from "react";
import cx from "classnames";
import styles from "../form/";

const initialValues = {
  email: "",
  password: "",
  isemailValid: false,
  ispasswordValid: false,
};

class SingInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialValues,
    };
  }

  handlerForm = (event) => {
    event.preventDefault();
    console.dir(event.target.email.value);
    //event.target.reset();
    this.setState({ ...initialValues });
  };
  //handlerEmail=({target:{value}})=>{this.setState({email:value});}
  //handlerPassword=({target:{value}})=>{this.setState({password:value});}
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };

  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;

    const emailClassName = cx(styles.input, {
      [styles.invalid]: !isemailValid,
    });
    const passwordClassName = cx(styles.input, {
      [styles.invalid]: !ispasswordValid,
    });
    return (
      <form className={styles.form} onSubmit={this.handlerForm}>
        <input
          onChange={this.handlerInput}
          value={email}
          className={emailClassName}
          placeholder="email"
          type="email"
          name="email"
        ></input>
        <input
          onChange={this.handlerInput}
          value={password}
          className={passwordClassName}
          placeholder="password"
          type="password"
          name="password"
        ></input>
        <input className={styles.input} type="submit" value="Send"></input>
      </form>
    );
  }
}

export default SingInForm;
