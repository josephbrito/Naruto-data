import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="https://github.com/josephbrito">
          <a>
            <Image
              src="/images/naruto.png"
              width="100"
              height="80"
              alt="Logo - Naruto"
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">
              <a>Personagens</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
