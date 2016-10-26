(function(ctx) {
  const contactView = {};

  contactView.init = function() {
    const heading = document.querySelector('h1');
    const contacts = document.getElementById('contacts');
    contacts.style.display = 'block';
    heading.textContent = 'This is the Contact View';
  }

  

  ctx.contactView = contactView;
})(window)
