import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Naruto - About</title>
      </Head>
      <div className={styles.about_container}>
        <Image
          src="/images/naruto-about.png"
          height="300"
          width="150"
          alt="Naruto"
        />
        <p>
          Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto,
          que conta a história de Naruto Uzumaki, um jovem ninja que
          constantemente procura por reconhecimento e sonha em se tornar Hokage,
          o ninja líder de sua vila
        </p>
      </div>
    </>
  );
}
