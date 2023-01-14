import React from 'react'


export default function CitySearch({inputName,Place}) {
  return (
    <>
     <div class="row height d-flex justify-content-center " >
    
    <div class="form-inline" id='ser1'>
       <center> 
        <form onSubmit={inputName}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={Place} id='ser2'/>
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={inputAction}>Search</button> */}
        </form>
        </center>
        
      </div>
    
    </div>
    </>
  )
}
