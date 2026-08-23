// 1 - Écrire une fonction qui prend un tableau de chaînes et retourne un tableau contenant la longueur de chaque chaîne.
function languerChaine(tableau){
let tab=[]
for (let i = 0 ; i< tableau.length ; i++){

    tab.push(tableau[i].length)
}
return tab
}
console.log(languerChaine (["hello","hi","bonjour"]))

// 2 - Écrire une fonction qui prend un tableau de chaînes et une lettre, et retourne un tableau contenant uniquement les chaînes qui contiennent cette lettre.
function lettredanstab(tableau,lettre){
    let tab = []
    for (let i = 0 ; i<tableau.length ; i++){
        
        if (tableau[i].includes(lettre) ){

            tab.push(tableau[i])
        }

    }
    return tab
}
console.log(lettredanstab(["hello","hi","bonjour"],"o"))

// 3 -Écrire une fonction qui prend un tableau d’objets représentant des étudiants et retourne un tableau ne contenant que les noms.
function tabObjet(tableau){
    let tab=[]
    for (let i = 0 ; i<tableau.length ; i++){
        tab.push(tableau[i].nom)
    }
return tab
}
console.log(tabObjet([{nom : "amine",age : 21 },{nom : "ahmed" , age : 22}]))

//4-Écrire une fonction qui prend un tableau de tableaux de nombres et retourne la somme de tous les nombres.
function sommenbr(tableau){
    let somme=0
    for (let i = 0 ; i<tableau.length ; i++){
        for (let j = 0 ; j<tableau[i].length ; j++){
            somme+=tableau[i][j]
            
        }
    }
return somme
}
console.log(sommenbr([[1,2,3],[4,5,6]]))


  
