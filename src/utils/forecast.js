const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=72e33ebe676c52530b98e46bdfc17e47&query=${latitude},${longitude}`
  
  request ({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      const {weather_descriptions, temperature, feelslike} = body.current
      callback(undefined, `${weather_descriptions[0]}, It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
    }
  })
}

module.exports = forecast