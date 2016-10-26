(function(ctx) {
  const homeView = {};

  homeView.init = function() {
    const heading = document.querySelector('h1');
    const contacts = document.getElementById('contacts');
    contacts.style.display = 'none';
    heading.textContent = 'This is the home route';
  };

  homeView.error = function() {
    const heading = document.querySelector('h1');
    const contacts = document.getElementById('contacts');
    contacts.style.display = 'none';
    heading.textContent = 'The system is down!';
  }

  ctx.homeView = homeView;
})(window)
