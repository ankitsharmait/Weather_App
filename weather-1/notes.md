## weather app
 * need a `data` - from an api.- > server url-data
 * that should also provide in pparticular format

 ##Data Reprsentation
1:-first way to reprsent Data is Xml 
**XML stands for eXtensible Markup Language
**XML is a markup language much like HTML
**XML was designed to store and transport data
**XML tags are not predefined like HTML tags are here we defined our own tags
**Xml is case sensative.
**Xml is only for store the data inside tag 

####2:-second way to reprsent data is JSON
**JSON stands for JavaScript Object Notation
**JSON is a text format for storing and transporting data
JSON notation is a way to describe data using a structure of:
Objects: Enclosed in curly braces {}, which are collections of key-value pairs similar to javascript object
Example:-
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "subjects": ["Math", "Science"]
}

Api gives data either in xml or json format in modern web dev api gives in json format..

why we are using json?
Ans:- javascript has inbuilt capability to read json data


<!-- json file by weather api -->
{
    "location": {
        "name": "Kolkata",
        "region": "West Bengal",
        "country": "India",
        "lat": 22.5697,
        "lon": 88.3697,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1733072178,
        "localtime": "2024-12-01 22:26"
    },
    "current": {
        "last_updated_epoch": 1733071500,
        "last_updated": "2024-12-01 22:15",
        "temp_c": 23.1,
        "temp_f": 73.6,
        "is_day": 0,
        "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
            "code": 1030
        },
        "wind_mph": 4.0,
        "wind_kph": 6.5,
        "wind_degree": 327,
        "wind_dir": "NNW",
        "pressure_mb": 1011.0,
        "pressure_in": 29.85,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 69,
        "cloud": 75,
        "feelslike_c": 24.4,
        "feelslike_f": 76.0,
        "windchill_c": 22.1,
        "windchill_f": 71.7,
        "heatindex_c": 24.1,
        "heatindex_f": 75.3,
        "dewpoint_c": 8.2,
        "dewpoint_f": 46.7,
        "vis_km": 3.2,
        "vis_miles": 1.0,
        "uv": 0.0,
        "gust_mph": 7.4,
        "gust_kph": 12.0,
        "air_quality": {
            "co": 3189.4,
            "no2": 61.605,
            "o3": 110.0,
            "so2": 37.925,
            "pm2_5": 88.985,
            "pm10": 90.095,
            "us-epa-index": 4,
            "gb-defra-index": 10
        }
    }
}


<!-- lecture 2 agenda -->
** http request and response
** intro to promises and async wait
** geting data from an api
** building application through dynamic data


                     ##weather app**
                 *data source->Api
                 *flow
                 *dummy ui   
                 * need data -> how to make a request api request 
                 #responce data
                 #response get
                 #data-> parse
                 * data -> document-> update data
  
          Browser vs javascript

  features provided by Browser example are given below..
  * setTimeOut
  * url
  * addEventListner
  * querySelector
  * document

           javascript provides logic
   