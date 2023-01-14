import React from 'react'
import './result.css';
import moment from "moment"


export default function Out({datas}) {
	console.log("Dataaaaaaaaaaas====>",datas);
  return (
    <>

    <div className='container'>
        
	
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
	{datas.map(item=>(
	<div class="col-3">
	<div class="card card-block  align-items-center card-1">
		<h2>{moment(item.dt*1000).format('dddd')}</h2>
		<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" id='sub'/>
		<p id='nan'>{item.temp.min}° C - {item.temp.max}° C</p>
		<p>{item.weather[0].main}</p>
		<p id='sos'>{item.weather[0].description
}</p>

	
	</div>
</div>
	))}
		
			
			   
    </div>
	
    </div>

</>
  )
}
