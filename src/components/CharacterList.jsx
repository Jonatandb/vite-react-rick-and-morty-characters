import { useEffect, useState } from 'react'
import Character from './Character'

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character?page=1',
        )
        const data = await response.json()
        if (mounted) {
          setCharacters(data.results)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

    return () => (mounted = false)
  }, [])

  return characters.map(character => (
    <Character key={character.id} character={character} />
  ))
}
