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
const contact1 = new Contact("Lévisse", "Carole");
const contact2 = new Contact("Nelsonne", "Mélodie");
tableauContact.push(contact1);
tableauContact.push(contact2);

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
                tableauContact.push(monContact); // monContact.ajouterContact
                break ;          
            }
        }
        console.log("Au revoir ! ") // mal positionné (a la fin)
        