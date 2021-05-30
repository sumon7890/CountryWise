async function loadData() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    displayData(data);
    
  }
  
  loadData();
  function displayData(data) {
    const countryName = document.getElementById("countryName");
    const country1 = document.getElementById('country');
    const alpha2Code1 = document.getElementById('alpha2Code');
    const numericCode1 = document.getElementById('numericCode');
    const capital1 = document.getElementById('capital');
    const population1 = document.getElementById('population');
    const region1 = document.getElementById('region');
    const area1 = document.getElementById('area');

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const ul = document.createElement("ul");
      ul.innerText = element.name;
      const div = document.createAttribute("div");
      div.innerHTML = ul;
      countryName.appendChild(ul);
      var button = document.createElement("button")
      button.innerText = "Details";
      button.style.backgroundColor = "#444";
      button.style.padding = "5px";
      button.style.fontSize = "30px";
      button.style.color = "#000";
      button.style.width = "250px";
      button.style.height = "50px";
      button.style.borderRadius = "8px";
      button.style.display = "block"
      button.style.cursor = "pointer"
      countryName.appendChild(button);
        button.addEventListener('click', function(){
          const table = document.getElementById("tablee")
          table.style.display="block"
          displayData1 (element)
      })
      function displayData1 (currentData){
        const name  = currentData.name;
        country1.innerText = name;

         const alpha2Code  = currentData.alpha2Code;
         alpha2Code1.innerText = alpha2Code;

         const numericCode  = currentData.numericCode;
         numericCode1.innerText = numericCode;

         const capital  = currentData.capital;
         capital1.innerText = capital; 

        const population  = currentData.population;
        population1.innerText = population;

        const region  = currentData.region;
        region1.innerText = region;

         const area = currentData.area;
         area1.innerText = area;

         function showData(){
            const name  = currentData.name;
            country1.innerText = name;
         }
         
      }     
    }
  }