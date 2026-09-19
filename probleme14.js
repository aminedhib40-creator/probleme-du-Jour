
// // 1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.

function aug10(tableaux) {
    return tableaux.map(element => {
        return element + (element * 10 / 100)
    })
}
console.log(aug10([10, 20, 30]))

// // 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de chaque phrase (sans compter les espaces) en utilisant foreach .
function lengthphrase(tableau) {
    let tab = []
    tableau.forEach(element => {
        tab.push(element.length)
    });
    return tab
}
console.log(lengthphrase(["hello", "hi", "bye"]))


// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant foreach .
function moyenne (tableau){
let result = 0
tableau.forEach(element=>{
    result+=element/tableau.length
})
return result
}
console.log(moyenne([1,2,3]))


// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
//
 var personnes = [{
       nom: {
             prenom: 'Majd',
           secondPrenom: 'Eddin',
     },
      age: 30
      }, {
      nom: {
            prenom: 'Fatima',
            nomFamille: 'Himmamy'
       },
       age: 26
       }, {
       nom: {
             prenom: 'Sahar',
             secondPrenom: 'MHD'
       },
       age: 27
       }, {
       nom: {
             prenom: 'Nour',
             secondPrenom: 'Eddin',
       },
       age: 15
       }, {
       nom: {
             prenom: 'Ahmad',
             nomFamille: 'Awad'
       },
       age: 33
 }];


function agesEnMinutes(personnes) {

    return personnes.map(personne => {
        return {
            nom : personne.nom ,
            age: personne.age * 365 * 24 * 60
        }
    })
}
console.log(agesEnMinutes(personnes))