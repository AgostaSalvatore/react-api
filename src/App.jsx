
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [actresses, setActresses] = useState([])
  const endpoint = 'https://lanciweb.github.io/demo/api/actresses'

  useEffect(() => {
    fetchActresses()
  }, [])

  const fetchActresses = () => {
    axios.get(endpoint)
      .then((response) => {
        // Check if response.data exists and has the expected structure
        const actressesData = response.data?.results || response.data || [];
        setActresses(actressesData);
      }) //sistemato dall'ia
      .catch((error) => console.log(`Error Fetching Actresses: ${error}`))
  }

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Actresses</h1>
          </div>
        </div>
        <div className="row g-3">
          {actresses.map((act) => (
            <div
              key={act.id}
              className="col-12 col-md-6 col-lg-4 col-xl-6">
              <div className="card rounded-0 d-flex">
                <div className="act-image">
                  <img src={act.image} className='img-fluid' alt={act.name} />
                </div>
                <div className="act-info">
                  <p className="act-name"><b>Name: </b>{act.name}</p>
                  <p className="act-birth-date"><b>Birth Year: </b>{act.birth_year}</p>
                  <p className="act-nationality"><b>Nationality: </b>{act.nationality}</p>
                  <p className="act-bio"><b>Biography: </b>{act.biography}</p>
                  <p className="act-awards"><b>Awards: </b>{act.awards}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
