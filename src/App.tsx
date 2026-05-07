import { useState,useEffect } from "react"
import { Result } from "./components/Result"
import { Summary } from "./components/Summary"
import type { score } from "./Types/score"
function App() {
  const [defaultScore,setDefaultScore]=useState<score[]>([])
  let total:number=0
  let totalScore=0
  useEffect(()=>{
      fetch("/data.json")
       .then(res=>res.json())
       .then(data=> setDefaultScore(data))
  })

  defaultScore.forEach((score)=>{
    total += score.score
    totalScore = (total/400) * 100
  })

  return (
    <>
      <section className="md:h-screen md:grid md:content-center">
        <div className="md:w-2/3 mx-auto md:flex md:gap-5 md:rounded-3xl md:bg-White md:shadow-xl ">
          <Result score={totalScore}/>
          <Summary defaultScore={defaultScore}/>
        </div>
      </section>

    </>
  )
}

export default App
