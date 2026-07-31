/* Lux Tiles & Stones — front-end behavior
   1) Mobile menu toggle  2) Sticky-header shadow on scroll
   3) Quote form: light validation + mailto submission
   No dependencies, no build step. */
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    burger.addEventListener('click', function () {
      setMenu(!menu.classList.contains('open'));
    });
    // Close after tapping a link
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        setMenu(false);
        burger.focus();
      }
    });
  }

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Quote form ---------- */
  var form = document.getElementById('quote-form');
  if (form) {
    var note = document.getElementById('form-note');
    var contactError = document.getElementById('contact-error');
    var nameEl = document.getElementById('f-name');
    var phoneEl = document.getElementById('f-phone');
    var emailEl = document.getElementById('f-email');
    var typeEl = document.getElementById('f-type');
    var msgEl = document.getElementById('f-msg');

    var markInvalid = function (el, invalid) {
      if (el) el.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    };

    var hideNoteOnEdit = function () {
      if (note) note.hidden = true;
    };
    form.addEventListener('input', hideNoteOnEdit);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = nameEl.value.trim();
      var phone = phoneEl.value.trim();
      var email = emailEl.value.trim();
      var type = typeEl.value;
      var msg = msgEl.value.trim();

      var ok = true;

      // Required: name + details
      markInvalid(nameEl, !name);
      if (!name) ok = false;
      markInvalid(msgEl, !msg);
      if (!msg) ok = false;

      // Need at least one way to reach them
      var hasContact = !!(phone || email);
      if (contactError) contactError.hidden = hasContact;
      markInvalid(phoneEl, !hasContact);
      markInvalid(emailEl, !hasContact);
      if (!hasContact) ok = false;

      if (!ok) {
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      var body = [
        'Name: ' + name,
        'Phone: ' + phone,
        'Email: ' + email,
        'Project type: ' + type,
        '',
        msg
      ].join('\n');

      var href = 'mailto:luxsurfaces661@gmail.com'
        + '?subject=' + encodeURIComponent('Quote Request — ' + name)
        + '&body=' + encodeURIComponent(body);

      window.location.href = href;
      if (note) note.hidden = false;
    });
  }
})();
