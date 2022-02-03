console.log("***TASK #2 from RECAP AJAX & FETCH");

// ovde gi selektiram elementite i ja zacuvuvam adresata vo variabla
let continentsBtn = document.getElementById("continentsBtn");
let resultOutput = document.getElementById("resultOutput"); // ova e tbody
let continentsUrl = "https://thronesapi.com/api/v2/Continents";

// ovde go pravam povikot so FETCH
function fetchContinents(apiUrl) {

    let promiseOfFetch = fetch(apiUrl);
    console.log(promiseOfFetch);

    promiseOfFetch.then(function (response){
        console.log(response);
        return response.text();
    })
    .then(function(result){
        console.log("here is result:", result);
        let parsedResult = JSON.parse(result);
        console.log(parsedResult);
        printResults(parsedResult, resultOutput);
    })
    .catch(function(error){
        console.log(error);
    });
}

// ovde ja pravam funkcijata shto ke gi printa rezultatite
function printResults(continentsArray, element) {

    element.innerHTML = "";
    element.innerHTML += `
        <tr><td>1. ${continentsArray[0].name}</td></tr>
        <tr><td>2. ${continentsArray[1].name}</td></tr>
        <tr><td>3. ${continentsArray[2].name}</td></tr>
        <tr><td>4. ${continentsArray[3].name}</td></tr>
    `
};

// ovde dodavam addEventListener na kopcheto
continentsBtn.addEventListener("click", function () {
    fetchContinents(continentsUrl);
  });























































































