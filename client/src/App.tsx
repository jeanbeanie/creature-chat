import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("Checking..!!");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");
        const data = await response.json();
        if(data.ok){
          setStatus("we're good boss");
        } else {
          // ?
        }
      } catch (err) {
        setError(err.message);
        setStatus("health is no bueno;")
      }
    }

    setTimeout(()=> {checkHealth()}, 2000);
  }, [])

  return (
    <>
      <section id="center">
        <h1>Creature Chat</h1>
        <div>
          <p>Health status: {status}</p>
          {error && <p>{error}</p>}
        </div>
      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
