/* 
Activité : gestion des contacts
*/

class Contact{
   let tableauContact = [];  // placer en dehors
    constructor(nom, premon){
        this.nom = nom;
        this.prenom = premon ;
    }

    afficherContact(c){
        console.log(`Nom : ${c.nom} + ", prenom : " + ${c.prenom}`);
    }

    parcourirContacts(){
        for(const contact of tableauContact){
          afficherContact(contact);  // contact.afficherContact
        }
    }
    ajouterContact(c){
    const tailleTableau  = tableauContact.length(); // length;
    tableauContact[tailleTableau] = c ; 
    }
}
const contact1 = new Contact("Carole", "Lévisse"); // ordre nom, prenom
const contact2 = new Contact("Mélodie" , "Nelsonne"); // ordre nom prenom
ajouterContact(contact1); // contact1.ajouterContact
ajouterContact(contact2); // contact2.ajouterContact
const saisie = prompt("Choissisez une option"); // Number()
console.log("Bienvenue dans le gestionnaire des contacts" + "\n" + "1 : Listez les contacts" + "\n" +" 2 : Ajoutez un contact "+ "\n" + " 0: Quittez ");
while("saisie" !== 0){
    switch(saisie){
		case : 1 // case 1:
            console.log("Voici la liste de vos contacts")
            parcourirContacts(); //
            break ;
		case : 2 // case 2:
            const nom = prompt("Entrez le nom du nouveau contact");
            const prenom = prompt("Entrez le prenom du nouveau contact");
            const monContact= new Contact(nom , prenom);
            ajouterContact(monContact); // monContact.ajouterContact
            break ;          
    }
    console.log("Au revoir ! ") // mal positionné (a la fin)
}
