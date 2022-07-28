import React, { Component } from "react";
import cx from "classnames";
import styles from "../CallMy";

const initialValues = {
  userName: "",
  phone: "",
};

class CallMy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialValues,
    };
  }
  handlerForm = (event) => {
    event.preventDefault();
    console.dir(event.target.email.value);
    this.setState({ ...initialValues });
  };

  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };

  render() {
    const { userName, phone, isemailValid, ispasswordValid } = this.state;

    const emailClassName = cx(styles.input, {
      [styles.invalid]: !isemailValid,
    });
    const passwordClassName = cx(styles.input, {
      [styles.invalid]: !ispasswordValid,
    });
    return (
      <form className={styles.form} onSubmit={this.handlerForm}>
        <label>
          {" "}
          Enter your name
          <input
            onChange={this.handlerInput}
            value={userName}
            className={emailClassName}
            placeholder="Name"
            name="userName"
          ></input>
        </label>

        <label>
          {" "}
          Enter your phone
          <input
            onChange={this.handlerInput}
            value={phone}
            className={passwordClassName}
            placeholder="+380950000000"
            name="phone"
          ></input>{" "}
        </label>
        <input className={styles.input} type="submit" value="Send"></input>
      </form>
    );
  }
}

export default CallMy;
