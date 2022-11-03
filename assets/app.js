const api = {
    key : 'f2938e19da1be0fc4277a4862e91dd51' , 
    url : `https://api.openweathermap.org/data/2.5/weather`
}

const ubicacion = document.getElementById ('ubicacion') 

const fecha = document.getElementById ('mapa') 

const tempimg = document.getElementById ('temp-img') 

const temperatura = document.getElementById ('temperatura') 

const variacionesTemperatura = document.getElementById ('VariacionesTemperaturas') 







async function buscar(query){
    try{
        const response = await fetch (`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        
        const data = await response.json();
        
        ubicacion.innerHTML = `${data.name}, ${data.sys.country}`;
        
        data.innerHTML = (new Date()).toLocaleDateString();
        
        temperatura.innerHTML =  toCelsius(data.main.temp) + 
        "°c";
        variacionesTemperatura.innerHTML = `${toCelsius(data.main.temp_max)}°c / ${toCelsius(data.main.temp_min)}°c`;
        
        updateImage(data);

    } catch(err){
        console.log(err);
        
    }
    
}



function toCelsius(kelvin){
    
    return Math.round(kelvin - 272.15)
    
    
}


function onSubmit (event) { 
    event.preventDefault();
    buscar(cajaBusqueda.value);
}

const form = document.getElementById ('form-search') 

const cajaBusqueda = document.getElementById ('caja-busqueda') 

form.addEventListener('submit' , onSubmit, true)





