const body = document.querySelector('body');
const lightThemeBtn = document.querySelector('#lightThemeBtn');
const darkThemeBtn = document.querySelector('#darkThemeBtn');

function addClassOnBtn(theme) {
    if (theme === 'light') {
        document.body.classList.remove('darkThemeBtn');
        document.body.classList.add('lightThemeBtn');
      } else if (theme === 'dark') {
        document.body.classList.remove('lightThemeBtn');
        document.body.classList.add('darkThemeBtn');
      }
}

function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

function loadThemePreference() {
    return localStorage.getItem('theme');
}

function toggleThemes() {
    body.classList.toggle('lightThemeBtn');
    darkThemeBtn.classList.toggle('hidden');
    lightThemeBtn.classList.toggle('hidden');
  
    // theme after chose
    const theme = body.classList.contains('lightThemeBtn') ? 'light' : 'dark';
    saveThemePreference(theme);
}

try {
    darkThemeBtn.addEventListener('click', toggleThemes);
    lightThemeBtn.addEventListener('click', toggleThemes);
  } catch (error) {}
  const savedTheme = loadThemePreference();
  
  if (savedTheme) {
    applyTheme(savedTheme);
  }
