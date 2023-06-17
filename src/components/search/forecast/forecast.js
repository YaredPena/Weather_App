import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; /*Array of the days*/

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <h2 className="title">Daily</h2>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`weather-app-images/${item.weather[0].icon}.png`} />
                                    <label className="day"> {forecastDays[idx]}</label>
                                    <label className="description"> {item.weather[0].description}</label>
                                    <label className="min-max"> {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel /* expands to show more details */>
                            <div className="daily-details-grid">
                                <div className="daily-details-grids-items">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grids-items">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grids-items">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grids-items">
                                    <label>WindSpeed</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-grids-items">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grids-items">
                                    <label>Feels like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
