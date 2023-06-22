import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';

const modalEl = document.querySelector('.backdrop');
const openModalEl = document.querySelector('.open-modal');
const formWrapperEl = document.querySelector('.form-wrapper');

let logOutBtn = null;

const firebaseConfig = {
  apiKey: 'AIzaSyBoP3LpsEiKYieYZusHkpDBfoZn6Hezx9o',
  authDomain: 'serhii-df24d.firebaseapp.com',
  projectId: 'serhii-df24d',
  storageBucket: 'serhii-df24d.appspot.com',
  messagingSenderId: '305658302139',
  appId: '1:305658302139:web:6a7f5004932c7c8c1f639e',
  measurementId: 'G-WNMLVDPVC8',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// formEl.addEventListener('submit', registerUser);

const auth = getAuth(app);
const books = [1, 2, 3];

function userSignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      logOutBtn.remove();
      openModalEl.textContent = 'Sign up';
      openModalEl.disabled = false;
    })
    .catch(error => {
      console.log(error);
    });
}

function registerUser(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { name, email, password } = evt.currentTarget.elements;
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      addUser(name.value);
      modalEl.classList.add('is-hidden');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// formEll.addEventListener('submit', loginUser);

async function loginUser(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { email, password } = evt.currentTarget.elements;

  await signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      console.log(user);
      const userName = getData();
      // ...
      modalEl.classList.add('is-hidden');

      // openModalEl.textContent = userName.name;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// const dataEl = document.querySelector('.data');
// dataEl.addEventListener('click', addData);

function addData() {
  console.log(addData);
  const db = getDatabase();

  update(ref(db, 'users/' + auth.currentUser.uid), {
    books: books,
  });
}

function getData() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${auth.currentUser.uid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        openModalEl.textContent = snapshot.val().name;
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function addUser(name) {
  console.log(addData);
  const db = getDatabase();

  set(ref(db, 'users/' + auth.currentUser.uid), {
    name: name,
  });
}

// MODAL------------------------------------------------------------------

const clozeEl = document.querySelector('.cloze');

clozeEl.addEventListener('click', clozeModal);

function clozeModal() {
  modalEl.classList.add('is-hidden');
}

const signInEl = document.querySelector('.sign-in');
const signUpEl = document.querySelector('.sign-up');

openModalEl.addEventListener('click', openModal);
signUpEl.addEventListener('click', openModal);
signInEl.addEventListener('click', signInForm);

function signInForm() {
  const markup = `<form class="login-form">
    <input type="text" name="email" placeholder="email" />
    <input type="text" name="password" placeholder="password" />
    <button type="submit" class="login">Login</button>
  </form>`;
  formWrapperEl.innerHTML = markup;
  const formEll = document.querySelector('.login-form');
  formEll.addEventListener('submit', loginUser);
}

function openModal() {
  if (openModalEl.textContent !== 'Sign up') {
    createMarkup();
    openModalEl.disabled = true;
    return;
  }

  const markup = `<form class="auth-form">
    <input type="text" name="name" placeholder="name" />
    <input type="text" name="email" placeholder="email" />
    <input type="text" name="password" placeholder="password" />
    <button type="submit" class="registr">Sign up</button>
  </form>`;
  formWrapperEl.innerHTML = markup;
  const formEl = document.querySelector('.auth-form');

  modalEl.classList.remove('is-hidden');
  formEl.addEventListener('submit', registerUser);

  console.log('openModal');
}
openModal();

function createMarkup() {
  const markup = `<button class="log-out">Log out</button>`;

  openModalEl.insertAdjacentHTML('afterend', markup);
  logOutBtn = document.querySelector('.log-out');
  logOutBtn.addEventListener('click', userSignOut);
}

console.dir(openModalEl);
