import { NavLink } from "react-router-dom";
import styles from "./Register.module.css";
import authStyles from "../Auth.module.css";
const Register = () => {
  return (
    <div className={authStyles.wrapper}>
      <div className={authStyles.container}>
        <h1 className={authStyles.title}>Create Account</h1>
        <h3 className={authStyles.subtitle}>
          Create an account so you can explore all the existing jobs
        </h3>
        <form className={authStyles.form} action="#">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className={authStyles.btnSubmit}>Sign up</button>
        </form>
        <NavLink className={authStyles.link} to="/auth/login">
          Already have an account
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
