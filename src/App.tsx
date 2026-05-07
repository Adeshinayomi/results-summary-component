import { useState,useEffect } from "react"
import { Result } from "./components/Result"
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
    </>
  )
}

export default App
