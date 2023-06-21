// import kalyminPhoto from '../images/students/kalymin.jpg';


const audio = document.querySelector('.students-overlay audio');
const students = [
  {
    studentName: 'Mikhail Sharaevsky',
    position: 'Team-Lead, Scrum Master',
    photo: bloodshot,
  },
  {
    studentName: 'Kalymin Vasyl',
    position: 'Front-end developer',
    photo: kalyminPhoto,
  },
  {
    studentName: 'Natalia Kalchenko',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Iryna Badenskova',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Yana Konovalova',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Andriy Vorozhbit',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Oleksandr Neskroba',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Hanna Pokamiestova',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Maksym Dimekhin',
    position: 'Front-end developer',
    photo: bloodshot,
  },
  {
    studentName: 'Volodymyr Poliakov',
    position: 'Front-end developer',
    photo: bloodshot,
  },
];

const studentsEl = document.querySelector('.goit-students');
const studentsCatalogEl = document.querySelector('.footer-students');

// // studentsEl.addEventListener('click', event => {
// //   event.preventDefault();
// //   showStudents(students, studentsCatalogEl);
// //   showStudentsModal();
// // });

// // function showStudents(studentsArray, parentElement) {
// //   let studentsMarkup = studentsArray
// //     .map(({ studentName, position, photo }) => {
// //       return `<div class="film-card">
// //     <img class="film-card__poster" src=${photo} alt=${studentName} />
// //     <div class="film-card__wrapper">
// //         <h3 class="film-card__film-name">${studentName}</h3>
// //         <div class="film-card__film-info">
// //             <div class="film-card__genre-year-wrapper">
// //                 <span class="film-card__genre">${position}</span>
// //                 <span></span>
// //                 <span class="film-card__year"></span>
// //             </div>
            
// //         </div>
// //     </div>
// // </div>`;
// //     })
// //     .join('');

// //   parentElement.innerHTML = studentsMarkup;
// // }

// // function showStudentsModal() {
// //   const studentsOverlayElement = document.querySelector('.students-overlay');
// //   studentsOverlayElement.classList.toggle('visually-hidden');
// //   playMusic();
// //   document.body.style.overflow = 'hidden';
// //   closeStudentsModal(studentsOverlayElement);
// // }

// function closeStudentsModal(element) {
//   const closeBtnElement = document.querySelector('.students-modal-close-btn');
//   closeBtnElement.addEventListener('click', () => {
//     element.classList.add('visually-hidden');
//     audio.pause();
//     document.body.style.overflow = 'scroll';
//   });
// }

// // function playMusic() {
// //   audio.play();
// // }


// function showStudentsModal() {
//     const studentsOverlayElement = document.querySelector('.students-overlay');
//     studentsOverlayElement.classList.toggle('visually-hidden');
//     playMusic();
//     document.body.style.overflow = 'hidden';
//     closeStudentsModal(studentsOverlayElement);
//   }