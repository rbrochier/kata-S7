// =====================================================
// Kata JS 6 — Mon balcon
// Suis les TODO dans l'ordre. La constante plantes vient de plantes.js.
// =====================================================


// ---------- PARTIE 1 : les fonctions qui CALCULENT ----------
// Elles reçoivent des données et RETOURNENT un résultat.
// Elles ne touchent pas à la page.


// TODO 1 — compterAArroser(liste)
// Retourne le nombre de plantes de la liste dont aArroser vaut true.
function compterAArroser(liste) {
  let compteur = 0;
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].aArroser === true) {
      compteur = compteur + 1;
      
    }
   
  }
  return compteur;
};

function filtrerAArroser(liste) {
  let tableau =[];
  for (let i = 0; i < liste.length; i++){
    if (liste[i].aArroser === true) {
    tableau.push(liste[i]);
  }
}
return tableau

}

console.log(compterAArroser(plantes))
// Vérifie dans la console avant de passer à la suite :
// console.log(compterAArroser(plantes)) // doit afficher 4


// TODO 2 — filtrerParLieu(liste, lieu)
// Retourne un NOUVEAU tableau avec seulement les plantes dont le lieu
// est égal au paramètre lieu ("intérieur" ou "extérieur").
function filtrerParLieu(liste, lieu) {
  let tableau =[];
  for (let i = 0; i < liste.length; i++){
    if (liste[i].lieu === lieu) {
    tableau.push(liste[i]);
  }
}
return tableau

}
console.log(filtrerParLieu(plantes, "intérieur"))

// console.log(filtrerParLieu(plantes, "intérieur")) // doit afficher 4 plantes


// ---------- PARTIE 2 : les fonctions qui AFFICHENT ----------
// Elles modifient la page. Elles ne retournent rien.


// TODO 3 — afficherPlantes(liste)
// 1. Vide la liste <ul id="liste">
// 2. Pour chaque plante, crée un <li> qui contient l'emoji puis le nom
// 3. Si la plante est à arroser, ajoute au <li> la classe "a-arroser"
// 4. Mets à jour <p id="compteur"> : « 4 plantes à arroser sur 8 »
//    (utilise compterAArroser, ne recompte pas ici)



function afficherPlantes(liste) {
const ul = document.getElementById("liste");
ul.innerHTML = "";


liste.forEach(plante => {
  const li =document.createElement("li")
  li.textContent = plante.emoji+" "+plante.nom
  ul.appendChild(li);

  if (plante.aArroser === true){
    li.classList.add ("a-arroser")
  }
    
});
    const p = document.getElementById("compteur");
    p.textContent = compterAArroser(liste) + " plantes à arroser sur " + liste.length
}

console.log(afficherPlantes(plantes));



// TODO 4 — Au chargement de la page, affiche toutes les plantes.

afficherPlantes(plantes);


// ---------- PARTIE 3 : les clics ----------


// TODO 5 — Les trois boutons de filtre
// Au clic sur « Intérieur » : affiche seulement les plantes d'intérieur.
// Au clic sur « Extérieur » : seulement celles d'extérieur.
// Au clic sur « Toutes » : toutes les plantes.
// Les gestionnaires sont des fonctions fléchées : () => { ... }

const boutonToutes = document.getElementById("btn-toutes");
boutonToutes.addEventListener("click", () => {
  afficherPlantes(plantes);
  activerBouton(boutonToutes);
})

const boutonInterieur = document.getElementById("btn-interieur");
boutonInterieur.addEventListener("click",() => {
  afficherPlantes(filtrerParLieu(plantes, "intérieur"))
  activerBouton(boutonInterieur);

})

const boutonExterieur = document.getElementById("btn-exterieur");
boutonExterieur.addEventListener("click",() => {
  afficherPlantes(filtrerParLieu(plantes, "extérieur"))
  activerBouton(boutonExterieur);
})

const boutonAArroser = document.getElementById("btn-arroser");
boutonAArroser.addEventListener("click",() =>{
  afficherPlantes(filtrerAArroser(plantes));
  activerBouton(boutonAArroser);


})


// TODO 6 — Le bouton actif
// Le bouton cliqué prend la classe "actif", les deux autres la perdent.
function activerBouton (boutonClique) {
 boutonToutes.classList.remove("actif");
 boutonExterieur.classList.remove("actif");
 boutonInterieur.classList.remove("actif");
 boutonAArroser.classList.remove("actif");

 boutonClique.classList.add("actif")


}



// =====================================================
// Questions de recul (réponds en commentaire ici)
// 1.
/// On pourrait tester avec Jest les TODO 1 & 2 car elles retournent des données mais ne produisent rien visuellement.
/// On ne pourrait pas tester les autres TODO car ce sont des fonctions qui modifient la page mais ne retournent pas de données.



// 2.
/// ça créé dès le depart 3 listes (toutes, interieur, exterieur), 
// puis à chaque clique cela créé à nouveaux des listes sans jamais remettre à zero , ce n'est effectivement pas gérable.




// 3.
/// A priori il n'est pas capables de lire plantes.js du tout si il est placé après script.js
/// Il doit avoir besoin de lire la variable plantes avant d'executer correctement script.js 
///Uncaught ReferenceError: plantes is not defined
/// at script.js:25:29
/// le premier appel de la variable plantes bloque tout le reste de l'execution.