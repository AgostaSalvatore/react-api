import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [actress, setActress] = useState([])
  const endpoint = 'https://lanciweb.github.io/demo/api/actresses'

  useEffect(() => {
    fetchActress()
  }, [])

  const fetchActress = () => {
    axios.get(endpoint)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(`Error Fetching Actress: ${error}`))
  }

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Actress</h1>
          </div>
        </div>
        <div className="row g-3">

        </div>
      </div>
    </>
  )
}

export default App
