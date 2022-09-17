import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <div className={styles.container}>
     
      <Link to="/"><img src="/static/images/logo.png" alt="logo"/></Link>
      {pathname==='/login'?<button className={styles.btn}><Link to="/signup">Sign up</Link></button>:
      <button className={styles.btn}><Link to="/login">Login</Link></button>}
    </div>
  );
};

export default Header;
