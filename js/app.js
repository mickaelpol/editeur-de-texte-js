// Fonction qui permet d'executer la commande demandé

function commande(nom, argument) {
    
    // si le type de argument n'es pas defini on n'affiche rien et on ne modifie rien
    if (typeof argument === 'undefined') {
        
        argument = '';
        
    }
    

    switch (nom) {
        // Commande pour creation d'un lien
        case 'createLink':
            argument = prompt("quelle est l'adresse du lien à ajouter ?")

            break;
        
            // Commande pour creation d'une image grace a un lien
        case 'insertImage':
            argument = prompt("quelle est l'adresse de l'image à ajouter ?")

            break;

    }
    
    // execute la commande demandé depuis la page html
    document.execCommand(nom, false, argument);
}


//  Fonction permettant d'afficher le resultat en html
function resultat() {
    
    // recupère  le contenu de l'editeur
    var content = $('#editeur').html();

    //on récupère les balise plus le contenu de l'editeur et on l'affiche
    $('#rendu').text(content);
    
}


// Fonction qui gère les titres selectionnée dans l'editeur
function titreChoisi() {
    
    $('select').change(function () {
        // récupère le texte dans l'éditeur
        var test = $('#editeur').text();
        
        //  stoque le data des titre 
        var title = {
    
            h1: "<h1>" + test + "</h1>",
            h2: "<h2>" + test + "</h2>",
            h3: "<h3>" + test + "</h3>",
            h4: "<h4>" + test + "</h4>",
            h5: "<h5>" + test + "</h5>",
            h6: "<h6>" + test + "</h6>"
    
        };
        
        //  Récupère la data selectionnée par l'utilisateur 
        var attr = $(this).find(':selected').data("titre");
        // Associe la data selectionnée a sa valeur
        var path = title[attr];
        // Ecrit et utilise la donnée selectionnée
        $('#editeur').html(path);

    });

}
// Lance la fonction titreChoisi()
titreChoisi();

