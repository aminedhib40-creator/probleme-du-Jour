

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.

function factorielle(n){
let result=1
let i=1
while(i<=n){
    result*=i
    i++
}
return result


}
console.log(factorielle(3))


// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.
function afficheMultiplesDe3(n){
    let i=0
while(i<=n){
   console.log(i)
   i+=3
    
}

}
console.log(afficheMultiplesDe3(9))


// 3- Crée une fonction qui prend un nombre et affiche "Bonjour" ce nombre de fois avec while.
function nbrbonjour(n){
let result=""
let i=1
while (i<=n){
    result+="bonjour"
    i++
}
return result

}
console.log(nbrbonjour(3))



// 4- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.
