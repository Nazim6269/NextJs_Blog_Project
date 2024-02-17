import styles from "./login.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>sign in with google</div>
        <div className={styles.socialButton}>sign in with github</div>
        <div className={styles.socialButton}>sign in with facebook</div>
      </div>
    </div>
  );
};

export default Login;
