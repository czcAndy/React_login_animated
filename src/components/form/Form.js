import Checkbox from '../../ui/elements/input/Checkbox';
import TextInput from '../../ui/elements/input/TextInput';
import TextInputWithIcon from '../../ui/elements/input/TextInputWithIcon';
import styles from './Form.module.css';

const Form = props => {
    return (
        <form className={styles.form}>
            <TextInputWithIcon placeholder={"Username"} preDefinedIconClasses={"fa fa-user icon"}/>
            <TextInputWithIcon placeholder={"Password"}  preDefinedIconClasses={"fa fa-key icon"}/>
          
          <div className={styles.other_actions}>
            <Checkbox label={"Remember me"}></Checkbox>
            <button className={styles.link}>Forgot Password?</button>
          </div>
          <button className={styles.submit} type="submit">
            log in
          </button>
        </form>
    )
}

export default Form;


/*
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
*/