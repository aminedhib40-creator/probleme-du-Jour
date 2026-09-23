
//=======================================================================
//                                  Q1
//=======================================================================

// Écrire une fonction qui prend un tableau de chaînes en entrée
// et retourne un tableau contenant toutes ces chaînes,
// mais converties en majuscules.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées  (map, filter, reduce).

let tableauChaine = ['bonjour', 'monde', 'tourne', 'pois'];
// mettreEnMajuscules(tableauChaines); 
// ==> [ 'BONJOUR', 'MONDE', 'TOURNE', 'POIS' ]

function mettreEnMajuscules(tableauChaines) {
  return tableauChaines.map(element=>{
    return element.toUpperCase()
  })

}
console.log(mettreEnMajuscules(tableauChaine));



//=============================================================================
//                                  Q2
//=============================================================================

// Écrire une fonction qui prend un tableau d'objets en entrée
// et retourne un tableau contenant uniquement les pays
// dont la population est supérieure à 500 millions.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées   (map, filter, reduce).

// Voici les données avec lesquelles vous allez travailler :

let donnees = [
    {
      pays: "Chine",
      population: 1409517397
    },
    {
      pays: "Inde",
      population: 1339180127
    },
    {
      pays: "États-Unis",
      population: 324459463
    },
    {
      pays: "Indonésie",
      population: 263991379
    }
];

// // paysLesPlusPeuples(donnees);
// // ==> [
// //   {pays: "Chine", population: 1409517397},
// //   {pays: "Inde", population: 1339180127}
// // ]

function paysLesPlusPeuples(tableauPays) {
  return tableauPays.filter(element=>{
    return element.pays && element.population>500000000
    
  })
}
console.log(paysLesPlusPeuples(donnees))


// //=============================================================================
// //                                  Q3
// //=============================================================================

// // Écrire une fonction appelée diviserParDeux qui prend un tableau
// // de nombres en entrée et retourne un tableau
// // avec tous ces nombres divisés par deux.
// // Résolvez cela en utilisant l'une des fonctions utilitaires
// // les plus appropriées   (map, filter, reduce).

let tableauNombre = [2, 6, 20, 8, 14];
// // diviserParDeux(tableauNombres); ==> [1, 3, 10, 4, 7]

function diviserParDeux(tableauNombres) {
  return tableauNombres.map(element=>{
    return element/2
  })
}
console.log(diviserParDeux(tableauNombre))


// //=============================================================================
// //                                  Q4
// //=============================================================================

// // Écrire une fonction appelée valeurs qui accepte un objet en paramètre
// // et retourne un tableau contenant les valeurs de cet objet.
// // Résolvez cela en utilisant l'une des fonctions utilitaires
// // les plus appropriées   (map, filter, reduce).
// let valeurs({
//     premier: 5,
//     deuxieme: 'quelque chose',
//     troisieme: 129
// });
// // ==> [5, 'quelque chose', 129]

// function valeurs(objet) {
//   return objet.map(element=>{
//     return Object.values(element)
//   })
// }
// console.log(valeurs({
//     premier: 5,
//     deuxieme: 'quelque chose',
//     troisieme: 129
// }))


// //=============================================================================
// //                                  Q5
// //=============================================================================

// // Écrire une fonction appelée chaineLaPlusCourte qui accepte
// // un tableau de chaînes et retourne la chaîne la plus courte.
// // Résolvez cela en utilisant l'une des fonctions utilitaires
// // les plus appropriées   (map, filter, reduce).
// // chaineLaPlusCourte(["salut", "a", "longue", "oui"]);
// // ==> "a"

function chaineLaPlusCourte(tableauChaines) {
  return tableauChaines.reduce((result,element)=>{
    if(element.length<result){
      result=element
      
    }
    return result
  },tableauChaines[0].length)
}
console.log(chaineLaPlusCourte(["salut", "a", "longue", "oui"]))
// ```

