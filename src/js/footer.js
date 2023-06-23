// import neskrobaPhoto from '../images/students/neskroba.jpg';
// import aleksynPhoto from '../images/students/aleksyn.jpg';
// import grigorevaPhoto from '../images/students/grigoreva.jpg';
// import alexeencoPhoto from '../images/students/alexeenco.jpg';
// import kalyminPhoto from '../images/students/kalymin.jpg';
// import kovalchukPhoto from '../images/students/kovalchuk.jpg';
// import stepanenkoPhoto from '../images/students/stepanenko.jpg';
// import martsafeyPhoto from '../images/students/martsafey.jpg';

// const audio = document.querySelector('.students-overlay audio');
// const students = [
//   {
//     studentName: 'Anna Grigoreva',
//     position: 'Team-Lead',
//     photo: grigorevaPhoto,
//   },
//   {
//     studentName: 'Martsafey Evhen',
//     position: 'Scrum Master',
//     photo: martsafeyPhoto,
//   },
//   {
//     studentName: 'Nick Kovalchuk',
//     position: 'Front-end developer',
//     photo: kovalchukPhoto,
//   },
//   {
//     studentName: 'Vladyslav Aleksyn',
//     position: 'Front-end developer',
//     photo: aleksynPhoto,
//   },
//   {
//     studentName: 'Vasyl Kalymin',
//     position: 'Front-end developer',
//     photo: kalyminPhoto,
//   },
//   {
//     studentName: 'Chirill Alexeenco',
//     position: 'Front-end developer',
//     photo: alexeencoPhoto,
//   },
//   {
//     studentName: 'Marina Stepanenko',
//     position: 'Front-end developer',
//     photo: stepanenkoPhoto,
//   },
//   {
//     studentName: 'Oleksandr Neskroba',
//     position: 'Front-end developer',
//     photo: neskrobaPhoto,
//   },
// ];

// const studentsEl = document.querySelector('.goit-students');
// const studentsCatalogEl = document.querySelector('.footer-students');

// studentsEl.addEventListener('click', event => {
//   event.preventDefault();
//   showStudents(students, studentsCatalogEl);
//   showStudentsModal();
// });

// function showStudents(studentsArray, parentElement) {
//   let studentsMarkup = studentsArray
//     .map(({ studentName, position, photo }) => {
//       return `<div class="film-card">
//     <img class="film-card__poster" src=${photo} alt=${studentName} />
//     <div class="film-card__wrapper">
//         <h3 class="film-card__film-name">${studentName}</h3>
//         <div class="film-card__film-info">
//             <div class="film-card__genre-year-wrapper">
//                 <span class="film-card__genre">${position}</span>
//                 <span></span>
//                 <span class="film-card__year"></span>
//             </div>
            
//         </div>
//     </div>
// </div>`;
//     })
//     .join('');

//   parentElement.innerHTML = studentsMarkup;
// }

// function showStudentsModal() {
//   const studentsOverlayElement = document.querySelector('.students-overlay');
//   studentsOverlayElement.classList.toggle('visually-hidden');
//   playMusic();
//   document.body.style.overflow = 'hidden';
//   closeStudentsModal(studentsOverlayElement);
// }

// function closeStudentsModal(element) {
//   const closeBtnElement = document.querySelector('.students-modal-close-btn');
//   closeBtnElement.addEventListener('click', () => {
//     element.classList.add('visually-hidden');
//     audio.pause();
//     document.body.style.overflow = 'scroll';
//   });
// }

// function playMusic() {
//   audio.play();
// }