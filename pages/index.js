import styles from "../styles/Home.module.css";
import Head from "next/head";
import Character from "../components/Character";

export async function getStaticProps() {
  const res = await fetch("https://naruto-api.herokuapp.com/api/v1/characters");
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
}

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Naruto - Homepage</title>
      </Head>
      <div className={styles.container}>
        <ul className={styles.list}>
          {characters.map((character) => (
            <li key={character.id}>
              <Character character={character} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
