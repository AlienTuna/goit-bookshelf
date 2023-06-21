document.querySelector('.switch').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('.switch');
    }
    else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.switch');
    }
  } catch (err) { }
}

addDarkClassToHTML();