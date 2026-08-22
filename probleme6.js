// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.

function removeByIndex(tableau,index){

    tableau.splice(index,1)
    return tableau

}
console.log(removeByIndex([1,2,2,3,4],2))






// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.
function pick(objet,tableau){
    let object={}
    for ( let i = 0 ; i<tableau.length  ; i++ ){

        if ( tableau[i] in objet ){
            object[tableau[i]]=objet[tableau[i]]
        }


    }
    return object
}

console.log(pick(  {prenom:'amine', age:21},  ["prenom","age"]  ))

//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.
function mostFrequent(tableau){

    let result = 0
    for (let i = 0 ; i<tableau.length ; i++){
        if (tableau)



    }


}
console.log(mostFrequent([1,2,3,2,4,5,3,2]))