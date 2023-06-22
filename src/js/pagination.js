// const shoppingList = JSON.parse(localStorage.getItem('ShoppingList')) || [];
// // Дані про загальну кількість сторінок
// var totalPages = 5;

// // Дані про поточну сторінку
// var currentPage = 1;

// // Функція для генерації пагінації
// function generatePagination() {
//   var paginationElement = document.getElementById("pagination");
    
  // if (shoppingList.length === 0) {
  //   paginationElement.style.display = "none";
  //   return;
  // }

  // paginationElement.style.display = "block";
//   paginationElement.innerHTML = "";

//   // Додавання кнопки "<<"
//   var firstButton = document.createElement("button");
//   firstButton.innerHTML = "<<";
//   firstButton.addEventListener("click", function() {
//     if (currentPage !== 1) {
//       currentPage = 1;
//       generatePagination();
//     }
//   });
//     firstButton.classList.add("double-doublearrow");
//   paginationElement.appendChild(firstButton);

//   // Додавання кнопки "<"
//   var prevButton = document.createElement("button");
//   prevButton.innerHTML = "<";
//   prevButton.addEventListener("click", function() {
//     if (currentPage > 1) {
//       currentPage--;
//       generatePagination();
//     }
//   });
//  prevButton.classList.add("double-arrow");
//   paginationElement.appendChild(prevButton);



//   // Додавання поточної та сусідніх сторінок
//   for (var i = currentPage - 1; i <= currentPage + 1 && i <= totalPages; i++) {
//     if (i > 0) {
//       var pageButton = document.createElement("button");
//       pageButton.innerHTML = i;
//       if (i === currentPage) {
//         pageButton.disabled = true;
//       } else {
//         pageButton.addEventListener("click", (function(page) {
//           return function() {
//             currentPage = page;
//             generatePagination();
//           };
//         })(i));
//         }
//         pageButton.classList.add("number");
//       paginationElement.appendChild(pageButton);
//     }
//   } 
    
//   // Додавання кінцевої сторінки або символів "..."
//   if (currentPage < totalPages - 1) {
//   if (currentPage < totalPages - 2) {
//     var dots = document.createElement("button");
//     dots.innerHTML = "...";
//     dots.classList.add("dots-button");
//       dots.disabled = true;
//       dots.classList.add("number");
//     paginationElement.appendChild(dots);
//   }
//     var lastPageButton = document.createElement("button");
//     lastPageButton.innerHTML = totalPages;
//     lastPageButton.addEventListener("click", function() {
//       currentPage = totalPages;
//       generatePagination();
//     });
//       lastPageButton.classList.add("number");
//     paginationElement.appendChild(lastPageButton);
//   }

//   // Додавання кнопки ">"
//   var nextButton = document.createElement("button");
//   nextButton.innerHTML = ">";
//   nextButton.addEventListener("click", function() {
//     if (currentPage < totalPages) {
//       currentPage++;
//       generatePagination();
//     }
//   });
//     nextButton.classList.add("double-arrow-next");
//   paginationElement.appendChild(nextButton);

//   // Додавання кнопки ">>"
//   var lastButton = document.createElement("button");
//   lastButton.innerHTML = ">>";
//   lastButton.addEventListener("click", function() {
//     if (currentPage !== totalPages) {
//       currentPage = totalPages;
//       generatePagination();
//     }
//   });
//    lastButton.classList.add("double-arrow-doublenext");
//   paginationElement.appendChild(lastButton);
// }

// // Генерація початкової пагінації
// generatePagination();