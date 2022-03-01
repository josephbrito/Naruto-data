import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <p className={styles.err}>
      <span>404</span> - Página não encontrada
    </p>
  );
}
