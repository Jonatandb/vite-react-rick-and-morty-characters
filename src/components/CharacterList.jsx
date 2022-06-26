import { useEffect, useState } from 'react'
import Character from './Character'

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

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
      } finally {
        setLoading(false)
      }
    }
    fetchData()

    return () => (mounted = false)
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          characters.map(character => (
            <div className='col-md-4' key={character.id}>
              <Character character={character} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
