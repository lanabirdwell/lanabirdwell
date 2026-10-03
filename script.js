// Light/dark theme toggle. Remembers your choice on this device.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var query = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    var set = root.getAttribute('data-theme');
    return set ? set === 'dark' : query.matches;
  }

  function render() {
    btn.textContent = isDark() ? 'Light mode' : 'Dark mode';
  }

  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    render();
  });

  render();

  // Add more interactive features below, for example:
  // filtering the Highlights cards by tag, or a "copy email" button.
})();
