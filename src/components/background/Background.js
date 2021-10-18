import styles from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.wave}>
        <h2>Welcome!</h2>
        <h3>Enter your ID and PASSWORD to continue</h3>
      </div>
      <div className={styles.form_control}>
        <form className={styles.form}>
          <div className={styles.input_wrapper}>
            <i class="fa fa-user icon"/>
            <input className={styles.input} id="username" type="text" placeholder="Username"/>
          </div>
          <div className={styles.input_wrapper}>
            <i class="fa fa-key icon"/>
          <input className={styles.input} id="password" type="password" placeholder="Password" />
          </div>
          <div className={styles.other_actions}>
            <li className={styles.li}>
              <input className={styles.checkbox} type="checkbox" id="remember_me" />
              <label className={styles.label} for="remember_me">Remember Me</label>
            </li>
              <button className={styles.link}>Forgot Password?</button>
          </div>
          <button className={styles.submit} type="submit">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Background;
