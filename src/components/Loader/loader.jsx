import React from "react";
import { Audio } from "react-loader-spinner";
import styles from "./loader.module.css";

const Loader = () => (
  <div className={styles["loader"]}>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
