import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>Хедэр</header>
      <section>Контент</section>
      <footer>Футер</footer>
    </main>
  );
}
