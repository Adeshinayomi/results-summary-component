import { useState,useEffect } from 'react'
import type { score } from '../Types/score'

interface type{
    score:score
}
export function Topic({score}:type){
    const [currentBgColor,setCurrentBgColor]=useState('');
    const [currentColor,setCurrentColor]=useState('');

    useEffect(()=>{
        if(score.category === 'Reaction'){
            setCurrentBgColor('bg-Lightred/10')
            setCurrentColor('text-Lightred')
        }else if(score.category === 'Memory'){
            setCurrentBgColor('bg-Orangeyyellow/10')
            setCurrentColor('text-Orangeyyellow')
        }else if(score.category === 'Verbal'){
            setCurrentBgColor('bg-Greenteal/10')
            setCurrentColor('text-Greenteal')
        }else if(score.category === 'Visual'){
            setCurrentBgColor('bg-Cobaltblue/10')
            setCurrentColor('text-Cobaltblue')
        }
    },[])


    return(
        <>
            <div className={`w-full flex justify-between p-4 ${currentBgColor} rounded-lg`}>
                <div className='flex gap-2'>
                    <img src={score.icon} alt="reaction-icon" />
                    <h1 className={`${currentColor} font-HankenLg`}>
                        {score.category}
                    </h1>
                </div>
                <p>
                    <span className='font-HankenBold'>{score.score}</span>
                    /
                    <span>100</span>
                </p>
            </div>
        </>
    )
}