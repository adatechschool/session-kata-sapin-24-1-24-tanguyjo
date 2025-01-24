// 1.1
function afficherEtoiles(n) {
  console.log("*".repeat(n));
}

// 1.2
function afficherRectangleIteratif(hauteur, largeur) {
  if (hauteur > 0 && largeur > 0) {
    for (let i = 0; i < hauteur; i++) {
      console.log("*".repeat(largeur));
    }
  }
}
function afficherRectangleRecursif(hauteur, largeur) {
  if (hauteur > 0 && largeur > 0) {
    console.log("#".repeat(largeur));
    afficherRectangleRecursif(hauteur - 1, largeur);
  } else {
    return;
  }
}
//1.3
function afficherTriangleDroite(n) {
  let i = 0;
  while (i < n) {
    console.log("*".repeat(i) + "\\");

    i++;
  }
}
//1.4
function afficherTriangleGauche(n) {
  let i = 0;
  while (i < n) {
    console.log(" ".repeat(n - 1 - i) + "/" + "*".repeat(i));

    i++;
  }
}
//1.5

function afficherPointeSapin(n){
    console.log(" ".repeat(n) + "+");
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
}}
//2.1

function afficherEtage(hauteur, pointe_offset){
    let max = hauteur + pointe_offset
    let min = hauteur - pointe_offset
    for (let i = pointe_offset; i < (max); i++) {
        console.log(" ".repeat((hauteur - i + max)) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
}}

//2.2


// let motif = ["*", "o","*","*","o","*","*","+"]
//  let random = Math.floor(Math.random() * 8)

function afficherEtageAvecAlignement(hauteur, pointe_offset, espacement){
    espacement = ""
    let max = hauteur + pointe_offset
    let min = hauteur - pointe_offset
    for (let i = pointe_offset; i < (max); i++) {
        console.log(" ".repeat((hauteur - i + 2)) + "/" +"*".repeat(i) + "|" + "*".repeat(i) + "\\");        
    }}
//2.3



function afficherSapin(etages,hauteur_etage){
    let espacement = hauteur_etage 
    let pointe_offset = 0;
    console.log(" ".repeat(hauteur_etage+etages ) + "+");
    for (let i = 0; i < etages; i++) {
     
        afficherEtageAvecAlignement(hauteur_etage,pointe_offset,espacement)
        espacement --;
        pointe_offset ++;}
            for (let i = 0; i < 3; i++) {
              console.log(" ".repeat(hauteur_etage+2) + "#".repeat(3));
            }
            console.log("|"+"--".repeat(hauteur_etage+3)+"|");

}
afficherSapin(3,3)
afficherSapin(3,4)
afficherSapin(3,5)

