const searchbtn = document.querySelector('#search');
const searchinput = document.querySelector('input');
 const temperatureEle = document.querySelector('.temperature');
 const locationEle = document.querySelector('.location');
 const timeele= document.querySelector('.time');
 const dayele = document.querySelector('.day');
 const dateele = document.querySelector('.date');
 const conditionele = document.querySelector('.condition');
searchbtn.addEventListener('click', async function () {
    const location = searchinput.value;
    if (location != '') {
        // Wait for the async fetchWeather function to return data
        const data = await fetchWeather(location);

        if(data!=null)
            updateDom(data);
        searchinput.value = ""; // Empty the input after search
    }
});

function updateDom(data) {
    console.log('I will update the DOM with the data:', data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const condition = data.current.condition.text;
    const imageEmozi = document.querySelector('.imageIcon');
    // Check if timeData exists before splitting it
    let date, time;
    if (timeData) {
        
        [date, time] = timeData.split(" ");
    } else {
        // Handle the case where timeData is undefined or invalid
        console.log("Invalid timeData:", timeData);
    }
    const iconLink = data.current.condition.icon;
    console.log("temp:", temp);
    console.log("location:", location);
    console.log("date:", date);
    console.log("time:", time);

    /********************************* Update The dom*************************************/
    temperatureEle.textContent=temp;
    locationEle.textContent=location;
    imageEmozi.src=iconLink;
    timeele.textContent=time;
    dateele.textContent=date;
    conditionele.textContent=condition;
    // dayele.textContent=

}


async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=465293e7996241aba01170326240112&q=${location}&aqi=yes`;
    // fetch is a inbuilt predefined function to get data i,e http response from server
    const response = await fetch(url);
    if (response.status == 400) {
        alert("Location is invalid");
        return null;
    } else if (response.status == 200) {
        const json = await response.json();
        return json;
    }
}

/*******
 * 
 * http packet (it means the fetched data fils we get from server)-> it contains two parts 
 * 1:-header->metadat,status
 * 2:-body-main data
 * 200 for succes
 * 404 -page not found
 * 400- bad request
 * 
 */
