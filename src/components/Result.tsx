export function Result(){
    return(
        <>
            <section className="w-full grid justify-center text-center py-10 bg-gradient-to-b from-Lightslateblue to-Lightroyalblue text-White rounded-b-3xl">
                <div className="w-2/3 mx-auto grid gap-5">
                    <span className="font-HankenMd text-Lightlavender text-lg">Your Result</span>
                    <div className="w-32 h-32 rounded-full justify-self-center grid content-center gap-0 bg-gradient-to-b from-Violetblue to-Lightroyalblue">
                        <h1 className="text-5xl font-HankenLg">76</h1>
                        <span className="text-Lightlavender font-Hanken text-sm">of 100</span>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-2xl font-HankenBold">Great</h2>
                        <p className="text-Lightlavender">
                            You scored higher than 65% of the people who have taken these tests.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}