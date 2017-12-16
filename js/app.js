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

$("input").click(function () {

    // console.log($(":input").val());

    // var contenu = $('#contenu').val();
    // var numero = $('button').val();
    // var balise = "<" + numero + ">" + contenu + "</" + numero + ">";
    // console.log(balise)
    // var rendu = $('#rendu');
    // rendu.html(balise);

})



