import React,{useState} from 'react'
import './App.css'

function App() {

  const [city,setCity]=useState("")
  const [restemp,setRestemp]=useState("")
  const [cloud,setCloud]=useState("")
  const [date,setDate]=useState("")


  const change=(event)=>{
    setCity(event.target.value)
  }

  const submit=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0b12c50457bf524aa436b3726490874`).then(Response=>Response.json()).then(data=>{
      const kelvin = data.main.temp
      const celsius = kelvin - 273
      setRestemp(Math.round(celsius) + "\u00B0" +"c")
      const clou=data.weather[0].description
      setCloud(clou)
      const today=new Date()
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
    
      var date = weekday[today.getDay()]+','+today.getDate()+month[today.getMonth()]
            setDate(date)
   
    })
  }
  return (
    <>
    <div  className="main">

      <div className="la1">
        <h3>WEATHER APP</h3>
      </div>

            <div className="la2">
        <input type="text" value={city} onChange={change} />
        <button onClick={submit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      </div>

      <div className="la5"><h3>{date}</h3></div>

      <div className="la3">
        
      <h1>{restemp}</h1>
      
            </div>
    
      <div className="la4">
      <h4>{cloud}</h4>
      
      </div>
     
       </div>

    </>
  );
}

export default App;
