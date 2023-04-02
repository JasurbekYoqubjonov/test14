import { useState } from "react";
import "./weather.css"
import axios from "axios";

function Weather(params) {
    const [data,setDAta]=useState({})
    const [search,setSearch]=useState("")
    const [select,setSelect]=useState("")

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eac07adc944ed4cb4651d3f7cca86330`
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${select}&appid=eac07adc944ed4cb4651d3f7cca86330`

    const searchLocation=(event)=>{
        if (event.code==="Enter") {
            axios.get(url).then((response)=>{
                setDAta(response.data)
                console.log(response.data);
            })
            setSearch()
        }
    }
    const selectLocation=(event)=>{
        if (event.type==="click") {
            console.log("click");
            axios.get(url2).then((response)=>{
                setDAta(response.data)
                console.log(response.data);
            })
            setSelect()
        }
    }
    return(
        <div>
            <div class="containers">
                <div className="col-left">
                    <select
                        className="select"
                        value={select}
                        onChange={event=>setSelect(event.target.value)}
                        onClick={selectLocation}
                    >
                        <option>Tashkent</option>
                        <option>Samarqand</option>
                        <option>Fergana</option>
                        <option>Andijon</option>
                        <option>Namangan</option>
                        <option>Navoiy</option>
                        <option>Xorazm</option>
                        <option>Qashqadaryo</option>
                        <option>Surxondaryo</option>
                        <option>Jizzax</option>
                        <option>Sirdaryo</option>
                        <option>Karakalpakstan</option>
                    </select>
                </div>
                <div className="col-right">
                    <input type="text"
                    className="input"
                    value={search}
                    onChange={event=>setSearch(event.target.value)}
                    onKeyDown={searchLocation}
                    />
                    <h1 className="title">{data.name}</h1>
                    <div className="row">
                        {data.main ? <h1 className="temp">{data.main.temp} °F</h1>:null}
                        {data.weather? <p className="weather">{data.weather[0].main}</p>:null}
                    </div>
                        <div className="rgba-row">
                            <div className="col">
                                {data.main? <p className="rgba-title">{data.main.feels_like} °F</p>:null}
                                <p className="rgba-text">Feels Like</p>
                            </div>
                            <div className="col">
                                {data.main? <p className="rgba-title">{data.main.humidity} %</p>:null}
                                <p  className="rgba-text">Humidity</p>
                            </div>
                            <div className="col">
                                {data.wind? <p className="rgba-title">{data.wind.speed} MPH</p>:null}
                                <p  className="rgba-text">Wind Speed</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;