# Thales Formation

** Attention, ce projet fonctionne parfaitement sur Firefox uniquement. Ayant été  délivré pendant et à la suite d'un Hackathon, l'accessibilité n'était pas l'objectif principal. Il se peut que les vidéos mettent du temps à charger car elles sont hébergées sur un hébergement n'étant pas prévu pour et ne sont absolument pas optimisées pour le Web. **
Une application support pour épauler les candidats dans leur apprentissage de la micro-soudure.
Délivrée pendant et après le Hackathon "Hack'tion commando" dont les principaux acteurs fûrent : Heracles, X five, Connexences et Thales Alenia Space, Charleroi.

![Screenshot_thales_learning_hub](http://daniel.muyshond.be/thales/thales_learning_hub_small.png)

### Built With

* [Bootstrap](https://getbootstrap.com/) - The web framework used
* HTML
* CSS (SCSS)
* JavaScript

## Author

* **Daniel Muyshond** - * - [dmshd](https://github.com/dmshd)


## License

This project is licensed under the Apache license - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Using Bootstrap for starting the project et deliver a template.
* Using JavaScript to create the functionnality that Jump to a specific time on the video.
* Using JavaScript to get the video stream from the webcam
* Record a video locally stored 
* Replay that video 
* Embedding PDF objects in the page
* Display ZOOM 100% that pdf
* handling jQuery hide / show & the difference with CSS visibility property ( hidden / visible )
* General UX improvements (buttons / hide & shows )

## Spécificités techniques et déploiement

`index.html` contient la table de matières.  
Chaque éléménent de la table des matières redirige vers un chapitre (une page web nomée `op1.html`, `op2.html` ou `op3.html`)
On peut aisément ajouter un chapitre en dupliquant une page HTML `op-.html` comme base et en modifiant simplement le code HTML.



### Menu mode opératoire

```HTML
<ul class="nav" id="menu-gauche">
    <li>
    <a href="#" id="1" class="videoControlButton">1. Mesure de l'entraxe
        <i class="video-icon"></i>
    </a>
    </li>
    <li>
    <a href="#" id="2" class="videoControlButton"> 2. Reporter la valeur sur la réglette de formage
        <i class="video-icon"></i>
    </a>
    </li>
    <li>
    <a href="#" id="3" class="videoControlButton">3. Mise en forme du composant
        <i class="video-icon"></i>
    </a>
    </li>
    <li>
    <a href="#" id="4" class="videoControlButton">4. Vérifier l'axe et tester
        <i class="video-icon"></i>
    </a>
    </li>
</ul>
```

#### Modifier le menu - ajouter un élément

Ajouter un élément un créant un nouvel élément de liste `li`.
Conserver un nom de class `videoControlButton` pour chaque élément ainsi qu'un `id` unique pour chaque élément. (numéroté et incrémenté dans l'odre croissant) L'`id` sert à créér des liens vers une portion de vidéo.

#### Modifier le menu - cibler une portion de vidéo  

##### Définir les blocs de vidéo
En bas de chaque page HTML entre les balises `<script>` sont définis des blocs sous la forme :  
```javascript
let bloc2 = {
      start: 9
    };
```  
la valeur de start représente la seconde de la vidéo à laquelle de liens doit pointer. Cela permet de créer des liens pointant vers une partie précise de la vidéo (pratique si la vidéo est longue). L'utilisateur peut revoir uniquement l'étape qu'il souhaite revoir et ne dois pas naviguer à travers l'ensemble du film.

##### Définir quel lien pointe vers quel bloc

à la suite de cette portion de code, toujours dans la balise `<script>`, en bas de la page HTML, une boucle switch passe en revue tous les boutons présents dans le menu de gauche (mode opératoire), si chaque élément de ce menu a bien un attribut `id` unique définit dans le HTML, il suffit de choisir quel élément du menu (via son `id` unique) pointe vers quel bloc préalablement défini.

```javascript 
let bloc1 = {
      start: 0,
    };

    let bloc2 = {
      start: 9
    };

    let bloc3 = {
      start: 36
    };

    let bloc4 = {
      start: 53,
    };

switch (this.id) {
          case "1":
            startCursor = bloc1.start;
            break;
          case "2":
            startCursor = bloc2.start;
            break;
          case "3":
            startCursor = bloc3.start;
            break;
          case "4":
            startCursor = bloc4.start;
            break;
    }
    demoVideo.currentTime = startCursor;
    demoVideo.play();
```
Donc si je clique sur le bouton du menu ayant dans son code HTML l'attribut `id="3"` ce qui dans `op1.html` correspont à `3. Mise en forme du composant` le lien déplacera le curseur de la vidéo à la seconde 36 définie dans :  

```javascript
let bloc3 = {
      start: 36
    };
```

### MOG et QF101
sont intégrés dans la page en HTML via les balises `<object>`. Les PDF sont localisés dans les dossiers `assets/MOGs` et `assets/QF101` du projet.  

```html
<object rel="preload" id="central-doc-pdfobject" class="embed-responsive-item" data="assets/MOGs/MOG-op2-report_de_composants_axiaux.pdf#zoom=100"
    type="application/pdf" internalinstanceid="9" title="">
    <p>Your browser isn't supporting embedded pdf files. You can download the file
        <a href="assets/MOGs/MOG-op2-report_de_composants_axiaux.pdf">here</a>.</p>
</object>
```
Ces éléments ont un `id` afin de pouvoir les manipuler (ici `central-doc-pdfobject`). Ils sont masqués au chargement dans les styles `CSS`  via: 
```CSS
#central-doc-pdfobject {
  display: none;
}
```
voir `assets/css/style.css`.

### Comment sont affichés / masqués chaque élément

Chaque élément est affiché ou masqué en jQuery via les méthodes `.show()` et `.hide()`. Voir `assets/js/config.js` pour les boutons `Start`, `Stop`, `Revoir l'enregistrement`, `Revenir à la démonstration` ainsi que les boutons `MOG` et `QF101` mais également `assets/js/mediarecorder.js` pour le bouton `Enregistrer une video`.

Par exemple :  

```javascript
// Quand on clique sur le bouton dont l' attribut id dans le HTML est "revenirbtn" (ce qui correspont au bouton "Revenir à la démonstration")
$( "#revenirbtn" ).click(function() {
  $("#recbtn").show(); //On affiche le bouton "Enregistrer"
  $("#revenirbtn").hide();  //On cache le bouton "Revenir à la démonstration"
  $("#startbtn").hide(); //On cache le bouton "Start" (qui sert à démarrer l'enregistrement)
  $("#stopbtn").hide(); //On cache le bouton "Stop" (qui sert à arrêter l'enregistrement)
  $("#revoirbtn").hide(); //On cache le bouton "Revoir l'enregistrement" (revoir la vidéo enregistrée)
  $("#livevideofrm").hide(); //On cache la balise <video> utilisée pour le live preview
  $("#recvideofrm").hide(); //On cache la balive <video> utilisée pour voir ce qui a été enregistré
  $("#demovideofrm").show(); //On réaffiche la <video> Thales
  $("#central-doc-pdfobject").hide(); //On cache le pdf
  $("#central-doc-pdfobject2").hide(); //On cache le pdf2
  $("#central-qf101-pdfobject").hide(); //On cache le pdf QF101
  //On redémarre la lecture
  videoElement.play();
});
```
Si on crée de nouveaux éléments `<object>` pour afficher des pdf ou de nouveaux `<button>`, il faudra s'assurer de leur état (affiché ou masqué) en fonction de où l'utilisateur se situe / ce dont il a besoin de voir.
