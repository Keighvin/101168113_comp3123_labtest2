import React from 'react';
import './styles.css';
import { Card,Button,Image } from 'semantic-ui-react'
import moment from 'moment';

const refresh = () => {
    window.location.reload();
  }

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <div className="main">

            <div className="top">
            <p className="header">{weatherData.name}</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            
            </div>
            <div className="flex">
            <Image class="ui medium circular image" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
            <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            
            </div>

            <div className="flex">
                <p className="description">{weatherData.weather[0].main}</p>
            </div>    

            <div className="flex">
            <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
            <p className="temp">Feels Like: {weatherData.main.feels_like} &deg;C</p>
            <p className="temp">Winds: {weatherData.wind.speed} km/h</p>         
            </div>

            <div className="flex">
            <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>

        </div>
    </Card.Content>
  </Card>
)

export default CardExampleCard;