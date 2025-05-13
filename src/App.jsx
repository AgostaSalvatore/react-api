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

    </>
  )
}

export default App
