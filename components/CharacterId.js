import styles from "../styles/CharacterId.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function CharacterId({ character }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>{character.name}</title>
      </Head>
      <div className={styles.person_container}>
        <div>
          <Image src={`${character.images[0]}`} height="250" width="350px" />
        </div>
        <div className={styles.person_data}>
          <h3>{character.name}</h3>
          <p>
            <span>Sexo:</span> {character.info.Sexo}
          </p>
          <p>
            <span>Ocupação: </span>
            {character.info.Ocupação
              ? `${character.info.Ocupação}`
              : "*Desconhecido*"}
          </p>
          <p>
            <span>Afiliação:</span>{" "}
            {character.info.Afiliação
              ? `${character.info.Afiliação}`
              : "*Desconhecido*"}
          </p>
          <p>
            <span>Parceiro:</span>{" "}
            {character.info.Parceiro
              ? `${character.info.Parceiro}`
              : "*Desconhecido*"}
          </p>
          <Link href={`${character.page}`}>
            <a>Fandom</a>
          </Link>
        </div>
      </div>
    </>
  );
}
