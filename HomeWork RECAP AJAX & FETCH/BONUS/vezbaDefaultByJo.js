console.log("***BONUS from RECAP AJAX & FETCH");

// ovde gi selektiram elementite i ja zacuvuvam adresata vo variabla
let allCharactersBtn = document.getElementById("johnSnowBtn");
let resultsDiv = document.getElementById("resultsDiv");
let gotUrl = "https://thronesapi.com/api/v2/Characters";


// ovde dzvonam na adresata  so cel da dobijam odgovor :D
function allCharactersInfo(apiUrl) {
    $.ajax({
        url: apiUrl,
        success: function (response) {
      console.log("Success", response);
      printResults(response, resultsDiv);
    },
    error: function (error) {
        console.log(error);
    }
    })
};

// ovde mu kazuvam na kopcheto koga ke go kliknat togash da dzvoni
allCharactersBtn.addEventListener("click", function(){
    allCharactersInfo(gotUrl);
})

// ovde ja postavuvam funkcijata koja shto ke printa rezultat
function printResults(allCharactersArray, element) {
    element.innerHTML = "";
  
    for(let i = 0; i < allCharactersArray.length; i++) {

        element.innerHTML += `
        <ul>
            <li>First Name: <b><u>${allCharactersArray[i].firstName}</u></b></li>
            <li>Last Name: <b><u>${allCharactersArray[i].lastName}</u></b></li>
            <li>Full Name: <b><u>${allCharactersArray[i].fullName}</u></b></li>
            <li>Title: <b><u>${allCharactersArray[i].title}</u></b></li>
            <li>Family: <b><u>${allCharactersArray[i].family}</u></b></li>
        </ul>

         <img src="${allCharactersArray[i].imageUrl}" alt="undefined">
        `;
    }
};



