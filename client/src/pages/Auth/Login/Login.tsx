import { NavLink } from "react-router-dom";
import authStyles from "../Auth.module.css";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={authStyles.wrapper}>
      <div className={authStyles.container}>
        <h1 className={authStyles.title}>Login here</h1>
        <h3 className={authStyles.subtitle}>Welcome back you’ve been missed!</h3>
        <form className={authStyles.form} action="#">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className={authStyles.btnSubmit}>Sign in</button>
        </form>
        <NavLink className={authStyles.link} to="/auth/register">
          Already have an account
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
