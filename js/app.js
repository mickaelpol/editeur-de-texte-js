//  Select des titre
var title = {

    h1: "<h1></h1>",
    h2: "<h2></h2>",
    h3: "<h3></h3>",
    h4: "<h4></h4>",
    h5: "<h5></h5>",
    h6: "<h6></h6>"

};


// Fonction qui permet d'executer la commande demandé

function commande(nom, argument) {
    
    if (typeof argument === 'undefined') {
        
        argument = '';
        
    }
    

    switch (nom) {
        case 'createLink':
            argument = prompt("quelle est l'adresse du lien à ajouter ?")

            break;
        
        case 'insertImage':
            argument = prompt("quelle est l'adresse de l'image à ajouter ?")

            break;
    }
    
    document.execCommand(nom, false, argument);
}


//  Fonction permettant d'afficher le resultat en html
function resultat() {
    
    document.getElementById("resultat").value =
        document.getElementById("editeur").innerHTML;
    
}

function titreChoisi() {

    $('select').change(function () {

        var attr = $(this).find(':selected').data("titre");
        var path = title[attr];

        $('#editeur').text(path);

    });

}

titreChoisi();

