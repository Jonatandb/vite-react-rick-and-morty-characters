import { useEffect, useState } from 'react'
import Character from './Character'
import Navigation from './Navigation'

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`,
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
  }, [currentPage])

  return (
    <div className='container'>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}
