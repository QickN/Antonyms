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


  return (
    <div>
      <p>{month}/{day}/{year}</p>
      <p>{hours}:{minutes}:{seconds}</p>
    </div>
  )
}

export default App
