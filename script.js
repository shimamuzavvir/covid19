let indiaData; // Declare indiaData globally
async function covid(){


let response = await fetch('https://data.covid19india.org/v4/min/data.min.json')
var data = await response.json();
        indiaData = data['TT']; // Assign data['TT'] to indiaData

        // Updating the DOM with the relevant information


        document.getElementById('totalCases').textContent = indiaData.total.confirmed;
        document.getElementById('activeCases').textContent = indiaData.total.confirmed - (indiaData.total.recovered + indiaData.total.deceased);
        document.getElementById('totalRecovered').textContent = indiaData.total.recovered;
        document.getElementById('totalDeceased').textContent = indiaData.total.deceased;


       // updating states in option

        let states = Object.keys(data);
        states.forEach((stateName) => {
            let option = document.createElement('option');
            option.value = stateName;
            option.textContent = stateName;
            document.getElementById('answer').appendChild(option);
        });


}


// updating selected state values

function getValue() {
   var stateSelect = document.getElementById("answer");
   var selectedState = stateSelect.value;
   fetch("https://data.covid19india.org/v4/min/data.min.json")
   .then(response=>response.json()).then(data=>{
   var selectedData =  data[selectedState].total; 
   let confirmed = selectedData.confirmed;
    let active = confirmed - (selectedData.recovered + selectedData.deceased);
    let recovered = selectedData.recovered;
    let deceased = selectedData.deceased;
    let vaccinated = selectedData.vaccinated1 + selectedData.vaccinated2;

   // display the selected state value in alert

    let message = selectedState + "\n"
    message += "Confirmed Cases: " + confirmed + "\n";
    message += "Active Cases: " + active + "\n";
    message += "Recovered: " + recovered + "\n";
    message += "Deceased: " + deceased + "\n";
    message += "Vaccinated: " + vaccinated;

    alert(message);
  
})

}
covid();   
        
   

   


