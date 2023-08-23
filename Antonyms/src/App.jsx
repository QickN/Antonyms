import { useState, useEffect } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="Title">
        <h1>Antonyms</h1>
      </div>
      <Day/>
      <p>coming soon....</p>
      <MakeBoard/>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>

    </>
  )
}

function Day(){
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());  // Update the date/time every second
    }, 1000);

    return () => {
      clearInterval(timer);  // Clean up the interval when the component unmounts
    };
  }, []);


  //Extract components
  const day = now.getDate();
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  //Get Time Components
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  let formattedSeconds = seconds.toString().padStart(2,'0')
  let formattedMinutes = minutes.toString().padStart(2,'0')

  return (
    <div>
      <p>{month}/{day}/{year}</p>
      <p>{hours}:{formattedMinutes}:{formattedSeconds}</p>
    </div>
  )
}

const words = ["apple", "banana", "cherry", "date", "fig", "grape", "honey", "kiwi", "lime"];


function MakeBoard() {
  return (
    <div className="grid">
      {words.map((word, idx) => (
        <button key={idx} className="button" onClick={() => {
          // Add any functionality you'd like when the button is clicked
          console.log(`You clicked on: ${word}`);
        }}>
          {word}
        </button>
      ))}
    </div>
  );
}


export default App
