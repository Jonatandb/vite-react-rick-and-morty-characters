export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <p>Page: {currentPage}</p>
      <button
        onClick={() =>
          setCurrentPage(currentPage => {
            if (currentPage === 42) {
              return 1
            } else {
              return currentPage + 1
            }
          })
        }
        className='btn btn-primary btn-sm'
      >
        Page {currentPage === 42 ? 1 : currentPage + 1}
      </button>
    </header>
  )
}
