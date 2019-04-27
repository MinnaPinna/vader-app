import React from 'react';


    const Weather = (props) => {
        return(
          <div>
            {props.country && props.city && <p>Stad: {props.city},    {props.country}</p>}
            {props.temperature && <p>Temperatur: {props.temperature}</p>}
            {props.humidity && <p>Fuktighet: {props.humidity}</p>}
            {props.description && <p>Förhållanden:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
          </div>
        )
      }
      export default Weather;
