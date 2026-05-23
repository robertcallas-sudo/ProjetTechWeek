var questions = [
  { artiste: "Ariana Grande", choix: ["Dua Lipa", "Camila Cabello", "Ariana Grande", "Madison Beer"], indice: "Sa queue-de-cheval haute signature", photo: "https://m.media-amazon.com/images/M/MV5BM2JhZWJmMDEtNTU5MS00YmQ3LTk1NjMtOGFlMjM2MjZlNjg5XkEyXkFqcGc@._V1_.jpg" },
  { artiste: "Bad Bunny", choix: ["Rauw Alejandro", "Bad Bunny", "J Balvin", "Maluma"], indice: "Le mauvais lapin", photo: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/f706/live/d8f38d40-0d79-11f1-ba5c-7bf79826200c.jpg" },
  { artiste: "Lady Gaga", choix: ["Ava Max", "Kesha", "Lady Gaga", "Gwen Stefani"], indice: "Une femme accomplie", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg/330px-Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg?utm_source=kab.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
  { artiste: "Doja Cat", choix: ["Nicki Minaj", "Ice Spice", "Saweetie", "Doja Cat"], indice: "Son extravagance", photo: "https://bi.org/wp-content/uploads/2025/01/featured-famous-bi-doja-cat-1024x1024.jpg" },
  { artiste: "BLACKPINK", choix: ["Aespa", "KISS OF LIFE", "BLACKPINK", "2NE1"], indice: "Le groupe K-pop le plus suivi au monde", photo: "https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Blackpink.jpg?v=1772443749" },
  { artiste: "Theodora", choix: ["Lala &ce", "Theodora", "Shay", "Meryl"], indice: "Son style iconic", photo: "https://gg.festapp.io/small_1725477907_small_theodora.jpeg" },
  { artiste: "Bruno Mars", choix: ["Bruno Mars", "The Weeknd", "Anderson .Paak", "Miguel"], indice: "APT APT", photo: "https://www.chartsinfrance.net/style/breves/5/photo_1665059826.jpg" },
  { artiste: "Tayc", choix: ["Tayc", "Dadju", "Franglish", "Jason Derulo"], indice: "Le prince de l'afrobeats français", photo: "https://img.nrj.fr/TASTHpuWjioKpsLyIv7z6eMMZfM=/medias%2F2023%2F09%2Fb2f-txhcrmbbnzhzctoj1tuulzux0-cqo139lquwjm_6515403a318e8.jpg" },
  { artiste: "Olivia Dean", choix: ["Joy Crookes", "Jorja Smith", "Olivia Dean", "Mahalia"], indice: "British soul", photo: "https://s.yimg.com/ny/api/res/1.2/0BRx20bw7YFT2YMnrI1.hQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwNDg7aD0xMTUyO2NmPXdlYnA-/https://media.zenfs.com/fr/cover_media_fr_articles_911/9e9ab747899329ebdf888c3b3682cfab" },
  { artiste: "BTS", choix: ["BTS", "Stray Kids", "Enhypen", "TXT"], indice: "Ils sont 7", photo: "https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d" },
  { artiste: "Gims", choix: ["Dadju", "Gims", "Black M", "Kaaris"], indice: "Ses lunettes de soleil, toujours", photo: "https://hiphopcorner.fr/wp-content/uploads/2021/08/gims.png" },
  { artiste: "Aya Nakamura", choix: ["Aya Nakamura", "Theodora", "Megan Thee Stallion", "Ronisia"], indice: "La reine de France", photo: "https://numero.com/wp-content/uploads/2025/02/aya-nakamura-3-768x965.jpg" },
  { artiste: "Katy Perry", choix: ["Zooey Deschanel", "Emily Blunt", "Katy Perry", "Siouxsie Sioux"], indice: "Ses tenues colorées et son ROAR", photo: "https://people.com/thmb/sbUcUvVGU8jpgUBTxTsoWaSNS14=/2000x1333/filters:fill(auto,1)/katy-perry12-07d45a172d5548b6a2e64d6743cf1521.jpg" },
  { artiste: "Michael Jackson", choix: ["Prince", "Michael Jackson", "Elvis Presley", "The Weeknd"], indice: "I-HI", photo: "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2023/08/michaeljackson.jpg" },
  { artiste: "Charles Aznavour", choix: ["Serge Gainsbourg", "Charles Aznavour", "Jean-Jacques Goldman", "Charles Trenet"], indice: "La légende de la chanson française", photo: "https://mradio.fr/media/news/charles-aznavour-honore-par-un-concert-symphonique_6690eed6812e5.webp" },
  { artiste: "Justin Bieber", choix: ["Zayn Malik", "The Kid LAROI", "Justin Bieber", "Austin Mahone"], indice: "Sorry", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9YshnHQLtE-Ah60Wgf55QLI2Tf1E7Zvlm_PUngwEHBt0dE-zEz5U3aXNjjIuq-PIV2AUvVa4Gkn7GyxUhgoXXJpeJLPtoBPo0mE6pi8&s=10" },
  { artiste: "Rema", choix: ["Omah Lay", "Fireboy DML", "Rema", "Wizkid"], indice: "L'afrobeats nigérian", photo: "https://maxazine.sn/wp-content/uploads/2022/02/unnamed-1-2.jpg" },
  { artiste: "Beyoncé", choix: ["Shakira", "Ciara", "Chloe Bailey", "Beyoncé"], indice: "La reine des abeilles", photo: "https://wallpapercg.com/media/ts_2x/29672.webp" },
  { artiste: "Fally Ipupa", choix: ["Fally Ipupa", "Ferré Gola", "Koffi Olomidé", "Innos'B"], indice: "L'aigle", photo: "https://i.ytimg.com/vi/Js-mEyHBJXk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYShXMA8=&rs=AOn4CLBMZZZKQBASbdTjSLt_FdpXyaTVqA" },
  { artiste: "Fairouz", choix: ["Oum Kalthoum", "Fairouz", "Warda Al-Djazairia", "Majida El Roumi"], indice: "La voix du Liban, icône de la musique arabe", photo: "https://focus.telerama.fr/2023/01/31/0/0/4530/4961/1200/0/60/0/3f26f1a_1675180415337-gettyimages-1361923405.jpg" },
  { artiste: "Nancy Ajram", choix: ["Elissa", "Nancy Ajram", "Haifa Wehbe", "Myriam Fares"], indice: " La superstar pop libanaise des années 2000", photo: "https://www.olympiahall.com/wp-content/uploads/2025/10/1080x1350-sans-texte-1000x1250.jpg" },
  { artiste: "Ferré Gola", choix: ["Fally Ipupa", "Ferré Gola", "Robinio Mundibu", "Koffi Olomidé"], indice: "La voix de la rumba congolaise", photo: "https://www.amanifestival.com/media/cache/facebookShare/imagebundle/gallery/cropped/c02507edd8b54f33e60ade6887dd310ea7dc757d.jpg" },
  { artiste: "Matt Pokora", choix: ["Matt Pokora", "Justin Timberlake", "Zayn Malik", "Adam Levine"], indice: "Le français laissé aux oubliettes", photo: "https://static1.purepeople.com/articles/0/51/88/60/@/7616359-difficile-pour-l-interprete-d-une-photo-580x0-3.jpg" },
  { artiste: "Rosalía", choix: ["Charli XCX", "Rosalía", "Camila Cabello", "Nelly Furtado"], indice: "La Rose", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacAGJ1_7Qudk9z3dvcxBFrAd723PAZQzg_6pHQOr1s_yaQF7E9B3tRruUgFmvOEaSXTDeh9oiqTnNbaXFKv1fvhHPR2DjpXwsNzj5tA&s=10" },
  { artiste: "Elvis Crespo", choix: ["Marc Anthony", "Ricky Martin", "Elvis Crespo", "Lou Bega"], indice: "Suavemente...", photo: "https://www.billboard.com/wp-content/uploads/2025/10/Elvis-Crespo-2025-credit-Punteria-Records-billboard-1800.jpg" },
  { artiste: "Таьрха Кыптыкова", choix: ["Таьрха Кыптыкова", "Zivert", "Polina Gagarina", "Olga Buzova"], indice: "La pop russe contemporaine", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tatiana_Kurtukova_LEO_Nov2024.jpg/960px-Tatiana_Kurtukova_LEO_Nov2024.jpg" },
  { artiste: "ABBA", choix: ["Fleetwood Mac", "Boney M", "ABBA", "Roxette"], indice: "Dancing Queen", photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/06/13/abba.jpg" },
  { artiste: "Céline Dion", choix: ["Lara Fabian", "Céline Dion", "Lady Gaga", "Sarah Brightman"], indice: "Elle revient en concert", photo: "https://4.bp.blogspot.com/-LO8O4HFmY4U/V9Amx6P2T9I/AAAAAAAAi7M/EhwtCFmKwwoj9b0_0ZX3uoFmWCxdd-d_ACLcB/s1600/16-0906.jpg" },
  { artiste: "Måneskin", choix: ["Palaye Royale", "Greta Van Fleet", "Måneskin", "Yungblud"], indice: "Le rock italien qui a conquis l'Eurovision", photo: "https://starzone.ch/thumb/NTI2ZmU3ZjYzNDg4NjBhMmQ3MjcxOGZjMWM0YmNjZDdfNGQ5NDE0NjBmMWNkNzUyMDJmYjM2NWUwOTMzYzJmYTUuanBn" },
  { artiste: "Olivia Rodrigo", 
  choix: ["Sabrina Carpenter", "Gracie Abrams", "Olivia Rodrigo", "Conan Gray"], 
  indice: "Driver's license", 
  photo: "https://fr.web.img4.acsta.net/c_310_420/pictures/17/08/04/14/36/466444.jpg"}
];

var questionsAffichees = [];
var indexActuel = 0;
var score = 0;
var historiqueResultats = [];
var joueurs = [];
var scoresJoueurs = [];
var joueurActuel = 0;

function validerPrenom(prenom) {
  return /^[a-zA-ZÀ-ÿ]{2,12}$/.test(prenom);
}

function melangerTableau(tableau) {
  var copie = tableau.slice();
  for (var i = copie.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copie[i];
    copie[i] = copie[j];
    copie[j] = temp;
  }
  return copie;
}

function afficherEcran(nomEcran) {
  document.getElementById("ecran-accueil").classList.add("cache");
  document.getElementById("ecran-joueurs").classList.add("cache");
  document.getElementById("ecran-quiz").classList.add("cache");
  document.getElementById("ecran-fin").classList.add("cache");
  document.getElementById(nomEcran).classList.remove("cache");
}

function afficherQuestion() {
  var q = questionsAffichees[indexActuel];

  document.getElementById("numero").textContent = indexActuel + 1;
  document.getElementById("score").textContent = scoresJoueurs[joueurActuel] !== undefined ? scoresJoueurs[joueurActuel] : score;
  document.getElementById("numero").textContent = indexActuel + 1;
// Affiche le nom du joueur actuel
var entete = document.getElementById("entete");
if (joueurs.length > 1) {
  entete.querySelector("span:last-child").textContent = "🎤 " + joueurs[joueurActuel] + " — Score : " + scoresJoueurs[joueurActuel];
}
  document.getElementById("indice").textContent = q.indice;
  document.getElementById("message-resultat").textContent = "";
  document.getElementById("bouton-suivant").classList.add("cache");

  var photoElt = document.getElementById("photo");
photoElt.style.visibility = "hidden";
photoElt.classList.remove("deFloute");
photoElt.classList.add("chargement");      // ✅ désactive la transition

var img = new Image();
img.onload = function() {
  photoElt.src = q.photo;
  photoElt.classList.remove("chargement"); // ✅ réactive la transition
  photoElt.style.visibility = "visible";
};
img.src = q.photo;

  // Timer
  if (window.timerEnCours) clearInterval(window.timerEnCours);
  var minuteurElt = document.getElementById("minuteur");
  minuteurElt.style.display = "block";
  minuteurElt.innerHTML = '🔍 Image révélée dans <span id="compte-a-rebours">5</span>s — ou réponds maintenant !';

  var secondes = 5;
  window.timerEnCours = setInterval(function() {
    secondes--;
    var compteAReboursElt = document.getElementById("compte-a-rebours");
    if (compteAReboursElt) compteAReboursElt.textContent = secondes;
    if (secondes <= 0) {
      clearInterval(window.timerEnCours);
      photoElt.classList.add("deFloute");
      minuteurElt.textContent = "✅ Image révélée ! Tu peux encore répondre.";
    }
  }, 1000);

  // Boutons
  var choixMelanges = melangerTableau(q.choix);
  var boutons = document.querySelectorAll(".reponse");
  for (var i = 0; i < boutons.length; i++) {
    boutons[i].textContent = choixMelanges[i];
    boutons[i].disabled = false;
    boutons[i].className = "reponse";
  }
}

function afficherFin() {
  afficherEcran("ecran-fin");

  if (joueurs.length === 1) {
    // Mode solo
    document.getElementById("score-final").textContent = "Tu as eu " + scoresJoueurs[0] + " / " + questionsAffichees.length;
  } else {
    // Mode multi — classement
    var classement = joueurs.map(function(nom, i) {
      return { nom: nom, score: scoresJoueurs[i] };
    }).sort(function(a, b) { return b.score - a.score; });

    var medailles = ["🥇", "🥈", "🥉", "4️⃣"];
    var texte = "🏆 Classement :<br>";
    for (var i = 0; i < classement.length; i++) {
      texte += medailles[i] + " " + classement[i].nom + " : " + classement[i].score + " / " + questionsAffichees.length + "<br>";
    }
    document.getElementById("score-final").innerHTML = texte;
  }

  var recap = document.getElementById("recapitulatif");
  recap.innerHTML = "";
  for (var i = 0; i < historiqueResultats.length; i++) {
    var r = historiqueResultats[i];
    var ligne = document.createElement("div");
    ligne.className = "ligne-recap";
    if (r.correct) {
      ligne.innerHTML = "<span class='puce-ok'>✔</span> " + r.artiste + (joueurs.length > 1 ? " <small>(" + r.joueur + ")</small>" : "");
    } else {
      ligne.innerHTML = "<span class='puce-ko'>✘</span> " + r.artiste + " <small>(dit : " + r.reponse + (joueurs.length > 1 ? " — " + r.joueur : "") + ")</small>";
    }
    recap.appendChild(ligne);
  }
}


window.allerVersJoueurs = function() {
  afficherEcran("ecran-joueurs");
};

window.demarrerJeu = function(nombre) {
  var j1 = document.getElementById("joueur1").value.trim();
  var j2 = document.getElementById("joueur2").value.trim();
  var j3 = document.getElementById("joueur3").value.trim();
  var j4 = document.getElementById("joueur4").value.trim();

  // Validation joueur 1 obligatoire
  if (!validerPrenom(j1)) {
    document.getElementById("erreur-joueurs").textContent = "Le prénom du joueur 1 est invalide (2-12 lettres uniquement) !";
    document.getElementById("erreur-joueurs").classList.remove("cache");
    return;
  }

  // Validation des joueurs optionnels s'ils sont remplis
  var optionnels = [j2, j3, j4];
  for (var i = 0; i < optionnels.length; i++) {
    if (optionnels[i] !== "" && !validerPrenom(optionnels[i])) {
      document.getElementById("erreur-joueurs").textContent = "Prénom invalide (2-12 lettres uniquement) !";
      document.getElementById("erreur-joueurs").classList.remove("cache");
      return;
    }
  }

  document.getElementById("erreur-joueurs").classList.add("cache");

  // Construction de la liste des joueurs
  joueurs = [j1];
  if (j2) joueurs.push(j2);
  if (j3) joueurs.push(j3);
  if (j4) joueurs.push(j4);

  scoresJoueurs = new Array(joueurs.length).fill(0);
  joueurActuel = 0;

  var nombreAjuste = nombre - (nombre % joueurs.length);
  if (nombreAjuste !== nombre) {
    alert("⚠️ " + nombre + " questions n'est pas divisible par " + joueurs.length + " joueurs. La partie se jouera en " + nombreAjuste + " questions (" + (nombreAjuste / joueurs.length) + " par joueur) !");
  }
  if (nombreAjuste === 0) {
    alert("❌ Impossible ! Choisissez plus de questions.");
    return;
  }
  nombre = nombreAjuste;

  document.querySelector("header").classList.add("cache");
  questionsAffichees = melangerTableau(questions).slice(0, nombre);
  indexActuel = 0;
  score = 0;
  historiqueResultats = [];
  document.getElementById("total").textContent = nombre;
  afficherEcran("ecran-quiz");
  afficherQuestion();
};

window.verifierReponse = function(boutonClique) {
  if (window.timerEnCours) clearInterval(window.timerEnCours);
  document.getElementById("minuteur").style.display = "none";
  document.getElementById("photo").classList.add("deFloute");
  
  var q = questionsAffichees[indexActuel];
  var reponseDonnee = boutonClique.textContent;
  var boutons = document.querySelectorAll(".reponse");

  for (var i = 0; i < boutons.length; i++) {
    boutons[i].disabled = true;
    if (boutons[i].textContent === q.artiste) {
      boutons[i].classList.add("correct");
    }
  }

  if (reponseDonnee === q.artiste) {
    score++;
scoresJoueurs[joueurActuel]++;
document.getElementById("score").textContent = scoresJoueurs[joueurActuel];
    document.getElementById("message-resultat").textContent = "✅ Bonne réponse !";
    document.getElementById("message-resultat").style.color = "#27ae60";
    historiqueResultats.push({ artiste: q.artiste, correct: true, joueur: joueurs[joueurActuel] });
  } else {
    boutonClique.classList.add("mauvais");
    document.getElementById("message-resultat").textContent = "❌ C'était " + q.artiste;
    document.getElementById("message-resultat").style.color = "#e74c3c";
    historiqueResultats.push({ artiste: q.artiste, correct: false, reponse: reponseDonnee, joueur: joueurs[joueurActuel] });
  }

  if (indexActuel === questionsAffichees.length - 1) {
    document.getElementById("bouton-suivant").textContent = "Voir mon score 🏆";
  } else {
    document.getElementById("bouton-suivant").textContent = "Suivant →";
  }
  document.getElementById("bouton-suivant").classList.remove("cache");
};

window.questionSuivante = function() {
  if (window.timerEnCours) clearInterval(window.timerEnCours);  
  document.getElementById("photo").style.visibility = "hidden";
  document.getElementById("photo").classList.remove("deFloute"); 
  indexActuel++;
  if (indexActuel >= questionsAffichees.length) {
    afficherFin();
  } else {
    joueurActuel = (joueurActuel + 1) % joueurs.length;
    afficherQuestion();
  }
};

window.recommencer = function() {
  document.querySelector("header").classList.remove("cache");
  joueurs = [];
  scoresJoueurs = [];
  joueurActuel = 0;
  score = 0;
  afficherEcran("ecran-accueil");
};

/* ══ CURSEUR MAGIQUE ══ */
document.addEventListener("mousemove", function(e) {
  var curseur = document.getElementById("curseur");
  curseur.style.left = e.clientX + "px";
  curseur.style.top  = e.clientY + "px";

  var trainee = document.createElement("div");
  trainee.className = "trainee";
  trainee.style.left = e.clientX + "px";
  trainee.style.top  = e.clientY + "px";
  document.body.appendChild(trainee);

  setTimeout(function() {
    trainee.remove();
  }, 600);
});

/* ══ BOULE DISCO ══ */
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI - fuzzy) / prec;
var discoBall = document.getElementById("discoBall");

for (var t = fuzzy; t < Math.PI; t += inc) {
  var z = radius * Math.cos(t);
  var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * currentRadius);
  var squaresThatFit = Math.floor(circumference / squareSize);
  var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

  for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    squareTile.style.width = squareSize + "px";
    squareTile.style.height = squareSize + "px";
    squareTile.style.transformOrigin = "0 0 0";
    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    var c = randomNumberDisco(110, 220);
    squareTile.style.backgroundColor = "rgb(" + c + "," + c + "," + c + ")";
    squareTile.style.animation = "reflect 2s linear infinite";
    squareTile.style.animationDelay = String(randomNumberDisco(0, 20) / 10) + "s";
    squareTile.style.backfaceVisibility = "hidden";
    square.appendChild(squareTile);
    square.className = "square";
    var x = radius * Math.cos(i) * Math.sin(t);
    var y = radius * Math.sin(i) * Math.sin(t);
    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    discoBall.appendChild(square);
  }
}

function randomNumberDisco(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Drag / swipe sur la boule */
var isDragging = false;
var lastX = 0;
var lastY = 0;
var posX = 0;
var posY = 0;

discoBall.addEventListener("mousedown", function(e) {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener("mousemove", function(e) {
  if (!isDragging) return;
  posX += e.clientX - lastX;
  posY += e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  discoBall.style.marginLeft = posX + "px";
  discoBall.style.marginTop = posY + "px";
});

document.addEventListener("mouseup", function() { isDragging = false; });

/* Touch mobile */
discoBall.addEventListener("touchstart", function(e) {
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
});

discoBall.addEventListener("touchmove", function(e) {
  e.preventDefault();
  posX += e.touches[0].clientX - lastX;
  posY += e.touches[0].clientY - lastY;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
  discoBall.style.marginLeft = posX + "px";
  discoBall.style.marginTop = posY + "px";
}, { passive: false });
window.abandonner = function() {
  if (confirm("Tu es sûr de vouloir abandonner ?")) {
    if (window.timerEnCours) clearInterval(window.timerEnCours);
    document.querySelector("header").classList.remove("cache");
    joueurs = [];
    scoresJoueurs = [];
    joueurActuel = 0;
    score = 0;
    document.getElementById("joueur1").value = "";
    document.getElementById("joueur2").value = "";
    document.getElementById("joueur3").value = "";
    document.getElementById("joueur4").value = "";
    afficherEcran("ecran-accueil");
  }
};
