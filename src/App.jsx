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
      .then((response) => setActress(response.data.results))
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
          {actress.map((act) => (
            <div
              key={act.id}
              className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card rounded-0 d-flex">
                <div className="act-image">
                  <img src={act.image} className='img-fluid' alt={act.name} />
                </div>
                <div className="act-info">
                  <h3 className="act-name">{act.name}</h3>
                  <p className="act-birth-date">{act.birt_date}</p>
                  <p className="act-nationality">{act.nationality}</p>
                  <p className="act-bio">{act.biography}</p>
                  <p className="act-awards">{act.awards}</p>
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
