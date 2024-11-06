import { authenticate } from "../lib/actions";
import styles from "../ui/login/login.module.css";

export default function Login() {
  const isLoggedIn = false;
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <div className={styles.titleText}>Login</div>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
        <div className={isLoggedIn ? styles.errorText : styles.hidden}>
          Invalid Credentials
        </div>
      </form>
    </div>
  );
}
