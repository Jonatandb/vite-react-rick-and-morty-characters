import React, { useEffect, useState } from 'react'

export default function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character?page=1',
      )
      const data = await response.json()
      console.log(mounted)
      if (mounted) {
        setCharacters(data.results)
      }
    }
    fetchData()

    return () => (mounted = false)
  }, [])

  return (
    <>
      <h1>Vite/React - Rick and Morty characters</h1>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </>
  )
}

