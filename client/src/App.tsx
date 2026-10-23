import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("Checking..!!");
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");
        let data;

        try { 
          data = await response.json();
        } catch {
          // server responded with non JSON...
          setStatus("health is no bueno!");
          setError("The server did not send JSON");
          return;
        }

        if (response.ok && data?.ok === true) {
          setStatus("We're good boss!");
        } else {
          setStatus("health is no bueno");
          setError(data?.message ?? `HTTP ${response.status}`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Hmm something went wrong.");
        setStatus("health is no bueno;");
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
