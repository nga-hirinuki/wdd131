


   
   const temperature = 10;    // °C
   const windSpeed = 4.8;     // km/h

   const calculateWindChill = (temp, wind) =>
     (temp <= 10 && wind > 4.8)
       ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)
       : "N/A";

   const result = calculateWindChill(temperature, windSpeed);
   document.getElementById('windChill').textContent =
     result === "N/A" ? "N/A" : result.toFixed(2) + " °C";