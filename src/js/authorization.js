const formEl = document.querySelector('.auth-form');
const formEll = document.querySelector('.login-form');

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';

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

formEl.addEventListener('submit', registerUser);

const auth = getAuth(app);
const books = [1, 2, 3];

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
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

formEll.addEventListener('submit', loginUser);

function loginUser(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { name, email, password } = evt.currentTarget.elements;

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;
      console.log(user);
      getData();
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

const dataEl = document.querySelector('.data');
dataEl.addEventListener('click', addData);

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
