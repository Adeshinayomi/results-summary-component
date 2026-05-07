import { Topic } from "./Topic"
export function Summary(){
    return(
        <>
            <section className="w-5/6 mx-auto mt-7 grid gap-5">
                <h1 className="text-lg font-HankenMd">Summary</h1>
                <div className="grid gap-5">
                    <Topic />
                </div>
                <button className="w-full mb-10 py-4 bg-Darkgrayblue text-White font-HankenBold text-lg rounded-full">
                    continue
                </button>
            </section>
        </>
    )
}