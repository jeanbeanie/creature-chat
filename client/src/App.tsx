import { useState, useEffect } from 'react'
import './App.css'


const cannedMessages = ["Hello","ok", "Cool."];

function App() {
  const [error, setError] = useState<string|null>(null);


  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log("formProps", formProps);

    // set user message
    // set creature message
    // clear user message
    // clear creature message
  }

  return (
    <>
      <section id="center">
        <h1>Creature Chat</h1>
        <div style={{fontSize:"6rem",display:"block",margin:"3rem auto"}}><p>👾</p></div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userMessage"/>
          <button type="submit">Submit</button>
        </form>
        <div>
          {error && <p>{error}</p>}
        </div>
      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
