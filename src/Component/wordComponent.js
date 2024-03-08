import React, { useEffect, useState } from 'react';

function WordComponent({ onWordChange }) {

    const words = [
      "chat", "chien", "maison", "arbre", "voiture", "ordinateur", "telephone",
      "fleur", "livre", "table", "chaise", "plante", "cuisine", "jardin", "route",
      "oiseau", "mer", "montagne", "soleil", "lune", "etoile", "musique", "film",
      "velo", "football", "tennis", "natation", "piano", "guitare",
      "violon", "theatre", "peinture", "sculpture", "photographie", "cuisine",
      "patisserie", "restaurant", "voyage", "vacances", "avion", "train", "bateau",
      "foret", "lac", "riviere", "cascade", "nuage", "tempete",
      "tornade", "pluie", "neige", "ecole", "universite", "professeur", "etudiant",
      "cours", "examen", "diplome", "mathematiques", "physique", "chimie", "biologie",
      "histoire", "geographie", "francais", "anglais", "espagnol", "allemand",
      "italien", "russe", "chinois", "japonais", "coreen", "arabe", "portugais",
      "hebreu", "hindi", "vetements", "chaussures", "robe", "chemise", "pantalon",
      "jupe", "costume", "cravate", "veste", "pull", "chaussettes", "chaussures",
      "casquette", "sac", "valise", "bijoux", "bague", "collier", "bracelet", "montre",
      "maquillage", "levres", "teint", "mascara",
      "crayon", "famille", "parent", "enfant", "frere", "soeur", "oncle", "tante", "cousin", "cousine", "ami", "amie", "voisin",
      "voisine", "collegue", "patron", "entreprise", "bureau", "reunion", "projet",
      "travail", "salaire", "promotion", "vacances", "repos", "pause", "loisir",
      "lecture", "ecriture", "sport", "musique", "cinema", "theatre", "exposition",
      "concert", "fete", "anniversaire", "mariage", "naissance", "deces", "sante",
      "maladie", "medecin", "hopital", "pharmacie", "remede", "traitement", "sante",
      "bien-etre", "alimentation", "repas", "dejeuner", "diner",
      "collation", "fruit", "legume", "viande", "poisson", "produit", "pain",
      "pates", "riz", "cereales", "boisson", "eau", "jus", "soda", "cafe", "the",
      "biere", "vin", "alcool", "gazeuse", "chaude", "froide",
      "alcoolise", "alcool", "energie", "motivation", "objectif",
      "reve", "ambition", "reussite", "echec", "erreur", "apprentissage", "experience",
      "connaissance", "savoir", "sagesse", "intelligence", "creativite", "imagination",
      "innovation", "decouverte", "invention", "technologie", "science", "art", "culture",
      "tradition", "coutume", "religion", "spiritualite", "croyance", "atheisme",
      "agnosticisme", "philosophie", "psychologie", "sociologie", "politique", "economie",
      "sante mentale", "emotion", "sentiment", "amour", "joie", "tristesse", "colere",
      "peur", "courage", "espoir", "paix", "tolerance", "respect", "gentillesse",
      "compassion", "solidarite", "generosite", "bonte", "humilite", "honnêteté",
      "integrite", "responsabilite", "justice", "equite", "liberte", "egalite",
      "fraternite", "democratie", "droits", "devoirs", "citoyennete", "engagement",
      "participation", "collaboration", "coopération", "communication", "dialogue",
      "ecoute", "compréhension", "pardon", "reconciliation", "education", "enseignement",
      "formation", "apprentissage", "instruction", "pédagogie", "méthode", "technique",
      "outil", "ressource", "materiel", "instrument", "equipement", "infrastructure",
      "logiciel", "application", "web", "reseau", "internet", "connexion",
      "wifi", "virtuelle", "artificielle", "big data", "blockchain", "cryptomonnaie", "bitcoin",
      "decentralise",
      "centralise", "cryptographie", "securite", "privee", "anonymat", "identite",
      "authentification", "confidentialite", "transparence", "fiabilite", "veracite",
      "integrite", "accessibilite", "inclusivite", "diversite", "equite", "sociale",
      "sustainable", "durable", "environnement", "ecologie", "climat",
      "rechauffement", "climatique", "pollution", "deforestation",
      "conservation", "recyclage", "reutilisation", "circulaire", "energie",
      "solaire", "eolienne", "hydroelectrique", "geothermique", "biomasse", "nucleaire",
      "carboneutralite", "carbone", "empreinte", "serre",
      "gaz", "developpement", "croissance", "prosperite",
      "richesse", "pauvrete", "inegalite", "developpement", "industrialisation", "urbanisation",
      "ruralite", "agriculture", "elevage", "peche", "aquaculture", "foresterie", "exploitation",
      "resilience", "adaptation", "changement", "innovation", "technologie", "numerisation",
      "dematerialisation", "automatisation", "robotique", "digitalisation", "intelligence", "croissance",
      "prosperite", "richesse", "pauvrete", "inegalite", "developpement", "industrialisation",
      "urbanisation", "ruralite", "agriculture", "elevage", "peche", "aquaculture", "foresterie",
      "exploitation", "resilience", "adaptation", "changement", "innovation", "technologie",
      "numerisation", "dematerialisation", "automatisation", "robotique", "digitalisation"
      
      ];
      
      const [newWord, setNewWord] = useState(null);

      //initialisation d'un nouveau mot avec selection aléatoire
      useEffect(() => {
        const newWord = words[Math.floor(Math.random() * words.length)];
        onWordChange(newWord);
        setNewWord(newWord);
      }, []);

  return (
    <div >
    {newWord && (
        <table >
        <tbody style={{color: 'transparent'}}>
        <tr>
            {newWord.split('').map((letter, index) => (
              <td className={letter} key={index} 
              style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',
              color: index === 0 || index === newWord.length - 1 ? 'black' : 'inherite',
              userSelect: 'none'
              }}>{letter}</td>
            ))}
          </tr>
        </tbody>
        </table>
    )}
    </div>
  );
}

export default WordComponent;
