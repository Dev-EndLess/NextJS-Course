import styles from './styles.module.css'


function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>About NAVBAR</nav>
      <main className={styles.main}>
        {children}
      </main>
    </div>
    );
}

export default AboutLayout;
