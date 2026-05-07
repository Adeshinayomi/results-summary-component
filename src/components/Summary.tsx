import { Topic } from "./Topic"
import type { score } from "../Types/score"

interface type{
    defaultScore:score[]
}
export function Summary({defaultScore}:type){
    return(
        <>
            <section className="w-5/6 md:w-full mx-auto mt-7 grid gap-5 md:px-10">
                <h1 className="text-lg font-HankenMd md:font-HankenBold">Summary</h1>
                <div className="grid gap-5">
                    {defaultScore.map((score)=>(
                        <Topic key={score.id} score={score}/>
                    ))}  
                </div>
                <button className="w-full mb-10 py-4 bg-Darkgrayblue text-White font-HankenBold text-lg rounded-full ease duration-300 hover:bg-gradient-to-b hover:from-Violetblue hover:to-Lightroyalblue ">
                    continue
                </button>
            </section>
        </>
    )
}