import { useEffect, useState } from "react";

function CountDownTimer(){


   const [expiryTime, setExpiryTime] = useState("31 mar 2022 00:00:01");
   const [countdownTime, setCountdownTime]= useState(
       {
           countdownDays:'',
           countdownHours:'',
           countdownlMinutes:'',
           countdownSeconds:''
       }
   );

    const countdownTimer=()=>{
    
        const timeInterval= setInterval(() => {

          const countdownDateTime = new Date(expiryTime).getTime(); 
          const currentTime = new Date().getTime();
          const remainingDayTime = countdownDateTime - currentTime;
          const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
          const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
          const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
     
          const runningCountdownTime={
             countdownDays: totalDays,
             countdownHours: totalHours,
             countdownMinutes: totalMinutes,
             countdownSeconds: totalSeconds
          }
       
          setCountdownTime(runningCountdownTime);
     
          if (remainingDayTime < 0) {
             clearInterval(timeInterval);
             setExpiryTime(false);
            }
     
         }, 1000);
    }
     
    useEffect(() => {
        countdownTimer();
    });
   
    return(
        <div className="row">
            <div className="col-sm-6">
                        <div className="btn-group my-3">
            {expiryTime!==false?
                <>
                <div className="block sm:flex font-nunito">
                    <div className="mx-3">
                        <div className="text-5xl font-bold text-vici_secondary_text bg-vici_light_gray py-3 px-6 rounded-2xl">
                            {countdownTime.countdownDays}
                        </div>
                        <div className="uppercase text-center text-sm font-bold pt-3">Day/s</div>
                    </div>
                    <div className="mx-3">
                        <div className="text-5xl font-bold text-vici_secondary_text bg-vici_light_gray py-3 px-6 rounded-2xl">
                            {countdownTime.countdownHours}
                        </div>
                        <div className="uppercase text-center text-sm font-bold pt-3">Hour/s</div>
                    </div>
                    <div className="mx-3">
                        <div className="text-5xl font-bold text-vici_secondary_text bg-vici_light_gray py-3 px-6 rounded-2xl">
                            {countdownTime.countdownMinutes}
                        </div>
                        <div className="uppercase text-center text-sm font-bold pt-3">Minute/s</div>
                    </div>
                    <div className="mx-3">
                        <div className="text-5xl font-bold text-vici_secondary_text bg-vici_light_gray py-3 px-6 rounded-2xl">
                            {countdownTime.countdownSeconds}
                        </div>
                        <div className="uppercase text-center text-sm font-bold pt-3">Second/s</div>
                    </div>
                   {/*  <button type="button" className="btn btn-outline-success">{countdownTime.countdownDays} <sub>Days</sub></button>
                    <button type="button" className="btn btn-success">:</button>
                    <button type="button" className="btn btn-outline-success">{countdownTime.countdownHours} <sub>Hours</sub></button>
                    <button type="button" className="btn btn-success">:</button>
                    <button type="button" className="btn btn-outline-success">{countdownTime.countdownMinutes} <sub>Minutes</sub></button>
                    <button type="button" className="btn btn-success">:</button>
                    <button type="button" className="btn btn-outline-success">{countdownTime.countdownSeconds} <sub>Seconds</sub></button> */}
                </div>
                </>
                :<p>Deal has been Expired</p>}
         </div>
            </div>
        </div>
    )

}
export default CountDownTimer;