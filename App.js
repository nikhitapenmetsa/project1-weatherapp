import React,{useState} from 'react'

function App() {

  const [city,setCity]=useState("")
  const [restemp,setRestemp]=useState("")

  const change=(event)=>{
    setCity(event.target.value)
  }

  const submit=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0b12c50457bf524aa436b3726490874`).then(Response=>Response.json()).then(data=>{
      const kelvin = data.main.temp
      const celsius = kelvin - 273
      setRestemp("temperature at" + " " + city +" "+Math.round(celsius) + "\u00B0" +"c")
    })
  }
  return (
    <>
    <div>
      <div>
        <h1>WEATHER APP</h1>
        <input type="text" value={city} onChange={change}/>
        <input type="submit" value="get temp" onClick={submit}/>
      </div>
      <h1>{restemp}</h1>
       </div>

    </>
  );
}

export default App;
