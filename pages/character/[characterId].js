import CharacterId from "../../components/CharacterId";

export async function getStaticPaths() {
  const res = await fetch("https://naruto-api.herokuapp.com/api/v1/characters");
  const data = await res.json();

  const paths = data.map((person) => {
    return {
      params: { characterId: person.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.characterId;

  const res = await fetch(
    `https://naruto-api.herokuapp.com/api/v1/characters/${id}`
  );
  const data = await res.json();

  return {
    props: {
      character: data,
    },
  };
}

export default function CharacterCard({ character }) {
  return (
    <div>
      <CharacterId character={character} />
    </div>
  );
}
