// (() => {
//     const refs = {
//       openMenuBtn: document.querySelector("[data-menu-open]"),
//       closeMenuBtn: document.querySelector("[data-menu-close]"),
//       menu: document.querySelector("[data-menu]"),
//     };
  
//     refs.openMenuBtn.addEventListener("click", toggleModal);
//     refs.closeMenuBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.menu.classList.toggle("is-open");
//     }
//   })();




//   function changeTheme(isChecked) {
//     if (isChecked) {
//       document.body.setAttribute('dark', '');
//     } else {
//       document.body.removeAttribute('dark');
//     }
//   }

// (() => {
//     const refs = {
//       openMenuBtn: document.querySelector("[data-menu-open]"),
//       closeMenuBtn: document.querySelector("[data-menu-close]"),
//       menu: document.querySelector("[data-menu]"),
//     };
  
//     refs.openMenuBtn.addEventListener("click", toggleModal);
//     refs.closeMenuBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.menu.classList.toggle("is-open");
//     }
//   })();


(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();