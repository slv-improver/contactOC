/* 
Activité : gestion des contacts
*/

class Contact{
    constructor(nom, premon){
        this.nom = nom;
        this.prenom = premon ;
    }

    ajouterContact(c){
        const tailleTableau  = tableauContact.length;
        tableauContact[tailleTableau] = c ; 
    }
}

let tableauContact = [];
const contact1 = new Contact("Carole", "Lévisse"); // ordre nom, prenom
const contact2 = new Contact("Mélodie" , "Nelsonne"); // ordre nom prenom
contact1.ajouterContact(contact1);
contact2.ajouterContact(contact2);

console.log("Bienvenue dans le gestionnaire des contacts" + "\n" + "1 : Listez les contacts" + "\n" +" 2 : Ajoutez un contact "+ "\n" + " 0: Quittez ");

while("saisie" !== 0){
    const saisie = Number(prompt("Choissisez une option"));
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
                const monContact= new Contact(nom , prenom);
                ajouterContact(monContact); // monContact.ajouterContact
                break ;          
            }
        }
        console.log("Au revoir ! ") // mal positionné (a la fin)
        