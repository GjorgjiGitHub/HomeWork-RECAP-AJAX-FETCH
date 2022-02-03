console.log("***TASK #1 from RECAP AJAX & FETCH");

// ovde gi selektiram elementite i ja zacuvuvam adresata vo variabla
let johnSnowBtn = document.getElementById("johnSnowBtn");
let resultsDiv = document.getElementById("resultsDiv");
let gotUrl = "https://thronesapi.com/api/v2/Characters/2";


// ovde dzvonam na adresata  so cel da dobijam odgovor :D
function johnSnowInfo(apiUrl) {
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
}

// ovde mu kazuvam na kopcheto koga ke go kliknat togash da dzvoni
johnSnowBtn.addEventListener("click", function(){
    johnSnowInfo(gotUrl);
})

// ovde ja postavuvam funkcijata koja shto ke printa rezultat
function printResults(johnSnowInfoArray, element) {
    element.innerHTML = "";
  
      element.innerHTML += `
              <ul>
                  <li>First Name: <b><u>${johnSnowInfoArray.firstName}</u></b></li>
                  <li>Last Name: <b><u>${johnSnowInfoArray.lastName}</u></b></li>
                  <li>Full Name: <b><u>${johnSnowInfoArray.fullName}</u></b></li>
                  <li>Title: <b><u>${johnSnowInfoArray.title}</u></b></li>
                  <li>Family: <b><u>${johnSnowInfoArray.family}</u></b></li>
              </ul>
              <img src="${johnSnowInfoArray.imageUrl}" alt="">
          `;
    };
  























































































