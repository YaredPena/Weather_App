import "./current-weather.css"

// Displays details of the weather currently
const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`weather-app-images/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{data.main.feels_like}m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{data.main.humidity}%</span>
                        </div>

                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value"> {data.main.pressure}hPa </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;

/*<div className="parameter-row">
    <span className="parameter-label">UV Index</span>
    <span className="parameter-label"> N/A </span>
</div>
<div className="parameter-row">
    <span className="parameter-label"> Chance of Rain</span>
    <span className="parameter-label"> 35% </span>
</div>*/