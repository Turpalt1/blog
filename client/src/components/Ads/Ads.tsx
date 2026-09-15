import type { HTMLAttributes } from "react";
import styles from "./Ads.module.css";
const Ads = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`${styles.ads} ${className ?? ""}`}>
      <p className={styles.title}>Advertisement</p>
      <p className={styles.subtitle}>You can place ads</p>
      <p className={styles.size}>750x100</p>
    </div>
  );
};
export default Ads;
