import React from 'react'


const Clock = () => {

    const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months =['January','February','March','April','May','June','July','August','September','Octuber','November','December']

    let date = new Date()
    let amPm='', hours=date.getHours(), minutes =date.getMinutes(),seconds=date.getSeconds(),month=date.getMonth(),day=date.getDate()
    if(date.getHours()>=12){
        hours= hours-12
        amPm='PM'
      }else{
        amPm='AM'
      }
    if(hours==0){hours=12;}
    if(minutes<10){minutes='0'+minutes}
    if(seconds<10){seconds='0'+seconds}
    if(day<10){day='0' + day}

  return (
    <div className='clock_box'>
      <div className="widget">
        <div className="ubication">
        </div>
        <div className="clock">
          <p className='hours'>{hours}</p>
          <p>:</p>
          <p className='minutes'>{minutes}</p>
          <p className='amPm'>{amPm}</p>
        </div>
        <div className="date">
          <p className='weekDay'>{days[date.getDay()]},</p>
          <p className='day'>{day}</p>
          <p className='month'>{months[month]},</p>
          <p className='year'>{date.getFullYear()}</p>
        </div>
    </div>
  </div>
  )
}

const timer = setInterval(Clock,1000)

export default Clock