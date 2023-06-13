import styles from "../../page.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h1>Error: 404</h1>
      <h3>User does not exist.</h3>
      <h2>
        <Link href="/users">Back to Users Page</Link>
      </h2>
    </div>
  );
}
