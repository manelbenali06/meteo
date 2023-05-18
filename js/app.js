
const APIKEY = 'b86f2df213ddfaba24c8f2dd63b184df';

//APPEL DE L'API openweathermap avec ville en parametre de fonction.

let apiCall = function(city){
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

/*
    -> executer la methode fetch 
    -> appel de l'url
    -> reccuperer la response
    -> la traiter en json
    -> reccuperer les data
    -> afficher les datas en console 
    -> reccuperer les id de mon documents et changer leurs html avec les noms correspondant dans le tableau de data
  */

fetch(url).then((Response) =>
    Response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML ="<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML ="<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    })

//sur la methode then faire un catch dans le cas ou ça plante afin de reccuperer l'erreur.
).catch(err => console.log('Erreur : ' + err));

}

/*
    -> Gérer la modification du formulaire :
    -> Selectionner le formulaire
    -> Ajouter un ecouteur d'evenements
    -> Ecouter la soumission du formulaire
    -> Casser l'evenement par default avec une fonction callback
    -> Réccuperer la valeur de l'input du formulaire que l'on tape a chaque fois
 */

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

    //Appel par défaut au chargement de la page
    apiCall('Paris');