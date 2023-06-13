import Link from "next/link";
import styles from "../page.module.css";

function About() {
  // throw new Error('Not Today Dude')
  return (
    <div className={styles.main}>
      <h1>About</h1>

        <h2 className={styles.card}>
          <Link href="/">Link to Homepage</Link>
        </h2>
    </div>
  );
}

export default About;
