/* TEDxPenfeld — le strict nécessaire.
   Un seul rôle : ouvrir et fermer la navigation sur mobile.
   Aucune dépendance, aucun traceur. */

(function () {
  var bouton = document.querySelector('.nav-bouton');
  var nav = document.getElementById('nav-principale');
  if (!bouton || !nav) return;

  bouton.addEventListener('click', function () {
    var ouvert = nav.classList.toggle('est-ouvert');
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('est-ouvert')) {
      nav.classList.remove('est-ouvert');
      bouton.setAttribute('aria-expanded', 'false');
      bouton.focus();
    }
  });
})();
