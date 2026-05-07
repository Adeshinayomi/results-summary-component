import reaction from '../assets/images/icon-reaction.svg'
export function Topic(){
    return(
        <>
            <div className="w-full flex justify-between p-4 bg-Lightred/10 rounded-lg">
                <div className='flex gap-2'>
                    <img src={reaction} alt="reaction-icon" />
                    <h1 className='text-Lightred font-HankenLg'>
                        Reaction
                    </h1>
                </div>
                <p>
                    <span className='font-HankenBold'>80</span>
                    /
                    <span>100</span>
                </p>
            </div>
        </>
    )
}