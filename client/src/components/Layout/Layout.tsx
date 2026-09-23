import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header className={`${styles.header} container`} />
      <div className="wrapper">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
