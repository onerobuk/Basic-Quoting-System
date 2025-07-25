interface SpinnerProps{
    topMessage:string
    bottomMessage:string
}

const Spinner = ({topMessage,bottomMessage}:SpinnerProps) =>{
    return(
        <div className={'flex justify-center items-center-safe h-screen bg-neutral-600'}>
            <div className={'flex flex-col items-center gap-4 text-white'}>
                <span className={'text-xl font-bold'}>{topMessage}</span>
                <div className={'mt-4 h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin'}></div>
                <span className={'text-xl font-bold'}>{bottomMessage}</span>
            </div>
        </div>
    )
}
export default Spinner;