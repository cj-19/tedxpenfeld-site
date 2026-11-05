/* TEDxPenfeld — le strict nécessaire.
   Deux rôles : ouvrir et fermer la navigation sur mobile, et empêcher
   l'envoi d'un formulaire qui n’est pas encore relié à son service.
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

/* Tant qu'un formulaire garde son action provisoire (#REMPLACER-…), l'envoi
   est bloqué et un message s'affiche : le visiteur ne perd pas ce qu'il a écrit.
   Ce bloc devient inactif de lui-même dès que la vraie URL est en place. */
(function () {
  var formulaires = document.querySelectorAll('form.formulaire');
  Array.prototype.forEach.call(formulaires, function (form) {
    if ((form.getAttribute('action') || '').charAt(0) !== '#') return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('.formulaire__inactif')) return;
      var message = document.createElement('p');
      message.className = 'formulaire__inactif';
      message.setAttribute('role', 'status');
      message.textContent = document.documentElement.lang === 'en'
        ? 'This form is not connected yet. Nothing you wrote is lost: it is still in the fields. Please come back in a few days, or write to tedxpenfeld@gmail.com.'
        : 'Ce formulaire n’est pas encore relié. Rien de ce que vous avez écrit n’est perdu : tout est encore dans les champs. Revenez dans quelques jours, ou écrivez-nous à tedxpenfeld@gmail.com.';
      form.appendChild(message);
    });
  });
})();

/* Date d'ouverture : le texte « ouvre le … » bascule de lui-même le jour venu
   (data-ouverture="AAAA-MM-JJ", texte suivant dans data-apres). */
(function () {
  var elements = document.querySelectorAll('[data-ouverture]');
  Array.prototype.forEach.call(elements, function (el) {
    if (new Date() >= new Date(el.getAttribute('data-ouverture') + 'T00:00:00')) {
      el.textContent = el.getAttribute('data-apres');
    }
  });
})();
