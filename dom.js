
const liste = document.querySelectorAll("li");
const uListe = document.querySelector("ul") ;
console.log ("premier H1 -> contenu" + container.firstElementChild.innerHTML + " !") ;

console.log ("--Récupérer le HTML du premier <li> (3 méthodes)--") ;

console.log ("first LI:" + liste[0].innerHTML) ;
console.log("first LI2:" + document.querySelector("li").innerHTML) ;
console.log("first LI3:" + uListe.firstElementChild.innerHTML) ;

console.log("-----Récupérer le HTML du dernier <li>-----") ;

console.log ("Last LI:" + liste[3].innerHTML) ;

console.log("-----Récupérer le HTML du troisième <li>-----") ;

console.log ("troisième LI:" + liste[2].innerHTML) ;

console.log("-----Récupérer le HTML du parents <ul>-----") ;

console.log ("HTML du parent de <ul>:" +document.querySelector("#menu").innerHTML);

console.log("-----Récupérer le HTML du parents du quatrième <li>-----") ;

console.log (uListe.innerHTML);

const effetRed = (event) =>
{
    return event.currentTarget.style.color="red";
}
const effetBlack = (event) =>
{
    return event.currentTarget.style.color="black";
}
uListe.addEventListener("mouseover", effetRed);
uListe.addEventListener("mouseout", effetBlack);

