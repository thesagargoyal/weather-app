const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp= document.getElementById('temp');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        temp.innerText = "--";
            // temp_status.innerHTML ="<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        city_name.innerText = "Please write the name before search";
    }else{

        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3d7503cb15b11993475bb6a85b5a0e88`;
            const response = await fetch(url);
            
            const data = await response.json();

            const arrData = [data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;

            temp.innerText = `${arrData[0].main.temp}°C`;
            
            const tempMood = arrData[0].weather[0].main;


            
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    
                }


        }catch{
            
            temp.innerText = "--";
            // temp_status.innerHTML ="<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            city_name.innerText ="Opps failed to fetch";
        }

    }


};

submitBtn.addEventListener('click', getInfo);