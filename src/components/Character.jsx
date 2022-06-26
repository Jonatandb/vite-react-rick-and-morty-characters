export default function Character({ character }) {
  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </>
  )
}
