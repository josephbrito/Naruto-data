import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="https://github.com/josephbrito">
          <a>
            <Image
              src="/images/naruto.png"
              width="100"
              height="100"
              alt="Logo - Naruto"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
}
