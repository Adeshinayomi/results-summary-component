import { useState,useEffect } from "react"
import { Result } from "./components/Result"
import { Summary } from "./components/Summary"
function App() {
  const [defaultScore,setDefaultScore]=useState()

  useEffect(()=>{
      fetch("/data.json")
       .then(res=>res.json())
       .then(data=> setDefaultScore(data))
  })


  return (
    <>
      <Result />
      <Summary />
    </>
  )
}

export default App
