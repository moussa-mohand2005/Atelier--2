Atelier 2 : Javascript et POO


Exercice 1 :
Dans cet exercice, j'ai défini la classe Voiture pour représenter une voiture avec des propriétés telles que le modèle, la marque, l'année de fabrication, le type et le carburant. Ensuite, j'ai créé deux classes qui en héritent : la première est Hyundai, à laquelle j'ai ajouté des propriétés comme la série et l'option hybride, ainsi qu'une méthode alarmer. La deuxième est Ford, qui contient une propriété options pour stocker des options supplémentaires comme GPS et Airbags. Ensuite, j'ai créé plusieurs voitures à partir de ces classes, puis je les ai stockées dans un tableau listeDesVoitures et triées par année de fabrication de manière croissante. Cela montre comment utiliser l'héritage en JavaScript pour organiser le code et personnaliser chaque classe selon ses besoins spécifiques.



Exercice 2 : 
Dans cet exercice, j'ai créé des objets pour représenter les étudiants et les professeurs. Chaque objet contient des propriétés comme le nom, l'âge, et des données supplémentaires comme le CNE pour les étudiants et le CIN pour les professeurs. Ensuite, j'ai stocké les étudiants dans un tableau listetu et je les ai triés par nom et ensuite par prénom. La fonction localeCompare est utilisée pour comparer les noms. Si les noms sont égaux, la comparaison est effectuée sur le prénom.




Exercice 3 :
Dans cet exercice, plusieurs classes sont définies en utilisant la programmation orientée objet (POO) pour organiser le code et montrer les relations entre les objets :
Classe Vecteur2D : La classe Vecteur2D représente les vecteurs dans un espace à deux dimensions. Elle contient les propriétés x et y pour représenter les coordonnées du vecteur, avec un constructeur pour initialiser ces valeurs. Il y a aussi une méthode affichage pour afficher les coordonnées et une méthode add pour additionner deux vecteurs. Des objets tels que v1, v2, v3, et v4 ont été créés, où les vecteurs ont été additionnés et les résultats affichés.
Classe Rectangle : La classe Rectangle représente un rectangle, avec les propriétés longueur et largeur. La classe contient deux méthodes : affichage pour afficher les informations du rectangle, et surface pour calculer l'aire. Un objet R de cette classe a été créé pour représenter un rectangle.
Classe carre : La classe carre hérite de la classe Rectangle et représente un carré. Le mot-clé super est utilisé pour appeler le constructeur de la classe Rectangle afin de transmettre les valeurs de longueur et largeur. Un objet C a été créé pour représenter un carré.
Classe point : La classe point représente un point dans un espace à deux dimensions, avec les propriétés x et y pour stocker les coordonnées.
Classe Segment : La classe Segment représente un segment de droite entre deux points. Elle contient deux points : orig (le point d'origine) et extrem (le point final). Les objets orig et extrem sont créés en utilisant la classe point.


Exercice 4 :
Dans cet exercice, nous avons créé un système de blog simple en utilisant la programmation orientée objet (POO). Le code comprend plusieurs classes et méthodes pour gérer les utilisateurs et leurs publications.
Classe U (Utilisateur) : La classe U représente un utilisateur avec deux propriétés : username (nom d'utilisateur) et password (mot de passe). Elle sert à gérer les informations des utilisateurs inscrits.
Classe P (Publication) : La classe P représente une publication de blog. Elle contient un titre (title), un contenu (content), l'auteur de la publication (author) et la date de création (date). Chaque publication est associée à un utilisateur.
Classe B (Blog) : La classe B représente le blog et gère l'inscription, la connexion des utilisateurs, ainsi que la gestion des publications. Elle contient un tableau d'utilisateurs (users) et un tableau de publications (posts). Les méthodes de cette classe permettent de :
registerUser : Enregistrer un nouvel utilisateur.
login : Connexion d'un utilisateur.
logout : Déconnexion d'un utilisateur.
addPost : Ajouter une publication.
getUserPosts : Récupérer toutes les publications d'un utilisateur.
Gestion de l'interface utilisateur : Le code utilise des éléments HTML et des événements pour afficher et interagir avec les utilisateurs. Les sections de la page sont cachées ou affichées en fonction de l'action de l'utilisateur (connexion, inscription, affichage des publications). Voici les actions principales :
Lorsqu'un utilisateur se connecte avec un nom d'utilisateur et un mot de passe valides, il accède à ses publications.
Lors de l'inscription, un nouvel utilisateur est ajouté.
Les publications peuvent être ajoutées, et elles sont stockées localement dans localStorage pour la persistance des données.
Fonctionnement général :
Les informations des utilisateurs et des publications sont enregistrées dans localStorage pour garantir leur persistance même après le rechargement de la page.
La méthode updateNavigation gère l'affichage des liens de navigation, en affichant soit les options de connexion et d'inscription, soit la déconnexion une fois que l'utilisateur est connecté.


