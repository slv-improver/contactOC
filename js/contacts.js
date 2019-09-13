/* 
Activité : gestion des contacts
*/

class Contact{
    constructor(nom, premon){
        this.nom = nom;
        this.prenom = premon ;
    }
}

let tableauContact = [];
tableauContact.push(new Contact("Lévisse", "Carole"));
tableauContact.push(new Contact("Nelsonne", "Mélodie"));

console.log("Bienvenue dans le gestionnaire des contacts" + "\n" + "1 : Listez les contacts" + "\n" +" 2 : Ajoutez un contact "+ "\n" + " 0: Quittez ");
var saisie = "";
while(saisie !== 0) {
    saisie = Number(prompt("Choissisez une option"));
    switch(saisie){
        case 1:
            console.log("Voici la liste de vos contacts")
            for(const contact of tableauContact){
                console.log(`Nom : ${contact.nom} + ", prenom : " + ${contact.prenom}`);
            }
            break ;
            case 2:
                const nom = prompt("Entrez le nom du nouveau contact");
                const prenom = prompt("Entrez le prenom du nouveau contact");
                tableauContact.push(new Contact(nom , prenom));
                break ;          
            }
}
            console.log("Au revoir ! ")
        