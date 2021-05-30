//https://github.com/sumon7890/CountryWise.git

async function loadData() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    displayCountry(data);
    
  }
  
  loadData();
  const displayCountry = country =>{
    const countries = document.getElementById("allcountry")
    // Table Preview id Input Start
        const country1 = document.getElementById('country');
        const alpha2Code1 = document.getElementById('alpha2Code');
        const numericCode1 = document.getElementById('numericCode');
        const capital1 = document.getElementById('capital');
        const population1 = document.getElementById('population');
        const region1 = document.getElementById('region');
        const area1 = document.getElementById('area');
      // Table Preview id Input End
    for (let i = 0; i < country.length; i++) {
      const countryInfo = country[i];
      console.log(countryInfo)
      const div = document.createElement('div')
      div.className = "newDiv"
      const countryInformation = `
      <img class="imgTag" src=${countryInfo.flag} />
        <h3 class="countryHead">${countryInfo.name} </h3>
        <p>${countryInfo.capital}</p>      
      ` 
      div.innerHTML = countryInformation;
      const button = document.createElement('button')
      button.innerText ="Info More"
      button.className = "btn"
      button.addEventListener('click', function(){
        const preViewInformation = document.getElementById("preview")
        countries.style.display="none"
        preViewInformation.style.display = "block"
        countryInfroma (countryInfo)  
      })
      div.appendChild(button)
       countries.appendChild(div)
 
       function countryInfroma (Information){
        const name  = Information.name;
        country1.innerText = name;
         const alpha2Code  = Information.alpha2Code;
         alpha2Code1.innerText = alpha2Code;
         const numericCode  = Information.numericCode;
         numericCode1.innerText = numericCode;
         const capital  = Information.capital;
         capital1.innerText = capital; 
        const population  = Information.population;
        population1.innerText = population; 
        const region  = Information.region;
        region1.innerText = region;
         const area = Information.area;
         area1.innerText = area;
         
  
      }


    }

    
  } 

  // const  againSuch = document.getElementById("again")
  //       againSuch.addEventListener('click',function(){
  //        countries.style.display="block"
  //        preViewInformation.style.display = "none"
  //            })