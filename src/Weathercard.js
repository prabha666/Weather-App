import React from 'react'
const Weathercard = ({tempInfo})=> {
    const {
        
        humidity,
        pressure,
        speed,
        sunset,
    }=tempInfo
  
    let sec=sunset;
    let date=new Date(sec*1000);
    let time=`${date.getHours()}:${date.getMinutes()} `;

  return (
    <>
     <div className='info'>
                <div className='info-child'>
                    <h2>Humadity</h2>
                    <h2 className='extrainfo'>{humidity}</h2>
                </div>

                <div className='info-child'>
                    <h2>Pressure</h2>
                    <h2 className='extrainfo'>{pressure}</h2>
                </div>
                <div className='info-child'>
                    <h2>Sunset</h2>
                    <h2 className='extrainfo'>{time}</h2>
                </div>
                <div className='info-child'>
                    <h2>Wind Speed</h2>
                    <h2 className='extrainfo'> {speed}kmph</h2>
                </div>
             </div> 
    </>
  )
}

export default Weathercard