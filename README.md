# JavaScript_Exercices
Exercices JavaScript

# Introduction :
Avant d'entrer directement dans le vif du sujet, cet atelier va vous apprendre les bases de JavaScript.

# Objectifs :
Les objectifs de cet atelier sont d’être capable d’intégrer des scripts clients dans un site ou une page en respectant les bonnes pratiques..

# Modalité de travail :
Travail individuel

# Livrable :
Un lien github

# Partie 1 : Comment écrire, afficher... SORTIR l'information ?
> Sortie_1 : Un des premiers soucis du programmeur est la communication avec la machine.
```
<html>
  <head>
    <title>Programme Out1</title>
  </head>
  <body>
    <script language="JavaScript">
      document.write('Vous avez le bonjour de JavaScript <br>');
    </script>
    HTML vous salut !
  </body>
</html>
```
> Sortie_2 : Afficher le contenu des variables
L'information est dans la mémoire de l'ordinateur. Pour la voir, il faut l'appeler à l'écran.
```
<html>
  <head>
    <title>Programme Out2</title>
  </head>
  <body>
  <script language="JavaScript">
  <!--
     var jour = 21;
     var mois = 'juin';
     document.write(jour + ' ' + mois + ' : solstice');
  //-->
  </script>
  </body>
</html>
```
> Sortie_3 : alert(), rien de grave, vous enverrez des informations
Cette méthode ouvre une boîte de dialogue avec 1 bouton OK. Elle permet :
- D’envoyer une information, un résultat, ... très facilement.
- De faire une pause. (Utile pour la mise au point d'un programme.)
```
<script language="JavaScript">
   alert('Pas discret, mais efficace.');
   alert(2+2);
   alert('Pi='+3.14);
</script>
```
> Sortie_4 :   Afficher dans un formulaire.  
C'est HTML qui crée les formulaires. JavaScript peut les atteindre et afficher dedans.

```
<form name="affiche">
<input type="text" name="champ" size="12" value="">
</form>
<script language="JavaScript"> 
document.affiche.champ.value='titi';
</script>
```
> Entree_1 : prompt(), pour lire des informations.  
Cette méthode ouvre une boîte de dialogue avec une zone saisie et 2 boutons : OK  Annuler. Elle permet : d'envoyer un message, mais surtout, de recevoir des informations.

```
<script language="JavaScript"> 
  annee=prompt('En quelle année sommes-nous ? ', 2000);
  alert('Vous avez répondu : ' + annee)
</script>
```
> Entree_2 : Lire des données à partir d'un formulaire.  

```
<html>
  <head><title>Programme In4</title><head>
  <script language="JavaScript"> 
    function Preferer(x)
    { switch(x) 
         {  case 1 : alert('Votre choix : '+'classique');break; 
            case 2 : alert('Votre choix : '+'jazz');     break; 
            case 3 : alert('Votre choix : '+'rock');     break; 
            case 4 : alert('Votre choix : '+'pop');      break; 
         }; 
    };
  </script>
  </head>
  <body>  
    <form name="musique">
    <select name="choix" onChange="Preferer(document.musique.choix.selectedIndex)">
    <option value = "choix">choisissez :
    <option value = "classique">classique
    <option value = "jazz">jazz
    <option value = "rock">rock
    <option value = "pop ">pop
    </select></form>
  </body>
</html>
```
# Partie 2 : Variables
## Déclaration des variables
Dans l'exercice ci-dessous vous devez créer les variables suivantes :
- num qui contient le nombre 255
- txt qui contient la chaîne de caractère 255
- bin qui contient la valeur booléenne vraie
- flt qui contient la valeur 7,23

## Opération sur les variables
Reprenez la déclaration des variables précédentes et :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne txt la chaîne " est ici une chaîne de caractères"
- Inversez la valeur logique de bin
- Ajoutez à flt la valeur contenue dans num

## Types des variables 
Dans cet exercice vous devez créer les variables suivantes :
- num qui contient le nombre 23
- txt qui contient la chaine de caractère 33
- tmp qui contient le nombre 0
- Convertir la chaîne contenue dans txt en nombre avec parseInt() et mettre le résultat dans tmp
- Ajouter à num le contenu de tmp

Pratice online :[Codingame](https://www.codingame.com/playgrounds/28439/exercices/javascript---les-variables)
