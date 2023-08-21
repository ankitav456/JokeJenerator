const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


const apiKey = "d8kVgsitJZIR9vMNEV5XWg==VCpDKv37GW4BKn1s";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,

    },
};


const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getjoke(){

    try{
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
       const response = await fetch(apiURL, options);
       const data = await response.json();
    
       btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
      jokeEl.innerText = data[0].joke;
    }catch(error){
        jokeEl.innerText ="An error happened, try again later";
console.log(error);

    }

    
}


btnEl.addEventListener("click", getjoke)