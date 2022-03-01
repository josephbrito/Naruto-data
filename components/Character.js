import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Character.module.css";

export default function character({ character }) {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <Image
          src={`${character.images[0]}`}
          height="250"
          width="200"
          alt={`${character.name}`}
        />
      </div>
      <div className={styles.character_name}>
        <p>{character.name}</p>
      </div>
      <div className={styles.button}>
        <Link href={`/character/${character.id}`}>
          <a>Detalhes</a>
        </Link>
      </div>
    </div>
  );
}
