import { Spin } from "antd";
import styles from "./LoadingScreen.module.scss";

export const LoadingScreen = () => {
  return (
    <div className={styles.root}>
      <Spin size="large" />
      <p>Chain list loading ...</p>
    </div>
  );
};
