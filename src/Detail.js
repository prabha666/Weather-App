import React, { useState ,useEffect } from 'react'

const Detail=({tempInfo})=> {
    const [weatherstate ,setWeatheState]= useState("")
    
    const {
        temp,
        weathermood,
        name,
        country,
    }=tempInfo

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
              case "Clouds":
                setWeatheState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatheState("wi-fog");
                break;
              case "Clear":
                setWeatheState("wi-day-sunny");
                break;
              case "Mist":
                setWeatheState("wi-dust");
                break;
      
              default:
                setWeatheState("wi-day-sunny");
                break;
            }
          }

    }, [weathermood])




  return (
    <>
     <div className='right'>
            <div className='weatherinfo'>
                <span className='temp'>{temp}&deg;</span>
             <div className='description'>
                <div className='place'>{name} {country}</div>
           
            <div className='date'>{new Date().toLocaleDateString()}</div>
            </div>

            <div className='icon'>
            <div className = "weticon">
            <i className={`wi ${weatherstate}`}></i>

            </div>
           
            <div className='weathercondition'>{weathermood}</div>
            </div>
         </div>
         </div>  
    </>
  )
}

export default Detail;