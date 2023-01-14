import React from 'react'
import './content.css';
import moment from 'moment'


export default function Content({outvalues}) {
  return (
    <>
<div class="row d-flex flex-row justify-content-around" id='mn'>
  <div class="col-sm-5"  >
    <div class="card text-center"id='deg1' >
      <div class="card-body">
        <h2 id='hd'>{outvalues.cityName}, {outvalues.countryName}</h2>
        <p class="card-text" id='cont'> {outvalues.Dates}</p>
        <p>Population : <span id='pop'> {outvalues. Population}</span></p>

      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card"  id='deg1'>
      <div class="card-body" >
        
        <p id='time'><img src="https://cdn-icons-png.flaticon.com/512/728/728123.png" alt="" id='yes'/>{outvalues.SunRise} A.M<br/><img src="https://cdn-icons-png.flaticon.com/512/3892/3892928.png" alt=""  id='yes'/>{outvalues.SunSet} P.M</p>
        <img src={`https://openweathermap.org/img/wn/${outvalues.Icon}@2x.png`} alt="" id='image'/>
        <p class="card-title"id='ko'>{outvalues.Temprature} <span id='po'>° C</span></p><br/>
        <p class="card-text" id='pp'><span id='kk'>{outvalues.Condition} </span>, &nbsp; {outvalues.Description}</p>
        <p class="card-text" id='pr'><img src="https://i.pinimg.com/originals/50/12/04/501204ac9f7e7101c348f209a4e2a805.png" alt="" id='yes' /> {outvalues.Pressure} &nbsp;<span id='kng'>hPa</span>&nbsp;&nbsp;&nbsp;{outvalues.Humidity}<span id='kng'> %</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{outvalues.WindSpeed} <span id='kng'>m/s</span></p>
   
      </div>
    </div>
  </div>
</div>


    </>
  )
}
