import Form from "../form/Form";
import styles from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.wave}>
        <h2>Welcome!</h2>
        <h3>Enter your ID and PASSWORD to continue</h3>
      </div>
      <div className={styles.form_control}>
        <Form></Form>
        <button className={styles.link}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Background;
