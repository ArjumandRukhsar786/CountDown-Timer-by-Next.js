import React, {useState, useEffect} from 'react'

const CountdownTimer: React.FC = () => {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0)


    useEffect (() => {
        let timer: NodeJS.Timeout;
        if (isRunning && remainingTime > 0 ){
            timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1)
            },1000)
        }

        else if (remainingTime === 0){
            setIsRunning(false)
        }
        return () => clearInterval(timer);

      }, [isRunning, remainingTime])


      const handlStart = () => {
        if (time > 0 ){
           setRemainingTime(time)
           setIsRunning(true)
        }
      }

      const handlPause = () => {
        setIsRunning (false)
      }

      const handlReset = () => {
        setIsRunning(false)
        setRemainingTime(0)
        setTime(0)
      } 

    return (
        <div className='flex flex-col min-h-screen items-center justify-center 
           bg-gradient-to-br from-pink-400 to bg-yellow-300'>

         <img src="../images/logo.png" alt="clock"
         className='absolute top-2 h-auto w-32 '
         />


         <h1 className='text-4xl font-extrabold uppercase mb-6  text-white bg-gradient-to-br from-green-500 to bg-orange-500'>CountDown Timer</h1>  

         <input type="number" 
         className='border-2 border-gray-700 bg-transparent p-3 mb-6 text-black font-bold text-xl rounded'
         placeholder='Enter Time In Second'
         value={time > 0 ? time : ""}
         onChange={(e) => setTime(Number(e.target.value))}
         /> 

         <div className='text-3xl font-semibold uppercase mb-6 text-white'>
            {remainingTime} seconds remaining
        </div> 

        <div>
          <button onClick={handlStart}
          className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600'>
            Start
          </button>

          <button onClick={handlPause}
          className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-yellow-600'>
            Pause
          </button>

          <button onClick={handlReset}
          className='text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-violet-500 to-red-500 hover:from-pink-600 hover:to-teal-600'>
            Reset
          </button>

          <footer className='mt-8 text-blue-700 text-md'>
            Under The SuperVision of Arjumand Rukhsar
          </footer>
        </div>



        </div>
    )      


}

export default CountdownTimer;