 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.

//  [1,2,3,2,4]
// function removeElement (tab , valeur ) {
//  let i = tab.indexOf(valeur)
//  // indexOf trajaalna awl position mtaa lvaleur
// let newTab = [...tab]
// if ( i !== -1 ) {
// // indexOf ki mtlkach element trjaalna -1 , if hedhi hya laaks maanha waktli lkat lvaleur
//     newTab.splice(i ,1 ) 
//     // bech nfskhou lelement bl splice eli tekhou premier arg : position , deuxieme : kadeh mn element bech tfasakh 
//     return newTab 
//     }
//     else {
// return tab }
// }
//  ************

function removeElement(tableau,valeur){
    let i=tableau.indexOf(valeur)
    let newtab=[...tableau]
    if (i !== -1){
        newtab.splice(i,1)
        return newtab
    }
    else {
        return tableau
    }

}
console.log(removeElement([1,2,3,2,4],2))


 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"

 function reverseStr(chaine){
    let result=""
    let i =chaine.length-1
    let j = 0
    while( i>=0){
        result+=chaine[i]+j


        i--
        j++
    }
return result

 }
 console.log(reverseStr("hello"))




 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']
function objkey(obj){

return Object.keys(obj)

}
console.log(objkey({name:'ahmed', age:20}))





// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']

tableau = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
let result =[]
for(let i =0 ; i< tableau.length ; i=i+2){
    result.push(tableau[i])
}
console.log(result)
