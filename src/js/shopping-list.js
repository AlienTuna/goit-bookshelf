const markup = currentData.map(({
  _id,
  book_image,
  author,
  book_image_width,
  book_image_height,
  title,
  list_name,
  description,
  buy_links: [amazon, apple, , , bookshop],
}) => {
return `<li class="shopping_list">
<div class="shopping_block">
  <div>
    <div class="shopping_thumb">
      <!-- <img src="${book_image}" alt="${list_name}" class="shopping__book-img" width="${book_image_width}" height="${book_image_height}"/> -->
    </div>
    <p class="shopping_book-author">book-author</p>
  </div>
  <div class="shopping_wrap">
    <h2 class="shopping_title">Title</h2>
    <p class="shopping_category">Category</p>
    <p class="shopping_book-description">description</p>
    <ul class="shopping_shops">
      <li class="shopping_shop">
        <a
          href="http://${amazon.url}"
          class="shopping__shop-link"
          crossorigin="anonymous"
          rel="noopener noreferrer"
          aria-label="Amazon-book site"
        >
          <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
        </a>
      </li>
      <li class="shopping_shop">
        <a
          href="http://${apple.url}"
          class="shopping__shop-link"
          crossorigin="anonymous"
          rel="noopener noreferrer"
          aria-label="Apple-book site"
        >
          <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
        </a>
      </li>
      <li class="shopping_shop">
        <a
          href="http://${bookshop.url}"
          class="shopping__shop-link"
          crossorigin="anonymous"
          rel="noopener noreferrer"
          aria-label="Book-shop site"
        >
          <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
        </a>
      </li>
    </ul>
    <div class="shopping_wrap-tablet">
      <p shopping_book-author-tablet>book-author</p>
      <ul class="shopping_shops-tablet">
        <li class="shopping_shop">
          <a
            href="http://${amazon.url}"
            class="shopping__shop-link"
            crossorigin="anonymous"
            rel="noopener noreferrer"
            aria-label="Amazon-book site"
          >
            <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
          </a>
        </li>
        <li class="shopping_shop">
          <a
            href="http://${apple.url}"
            class="shopping__shop-link"
            crossorigin="anonymous"
            rel="noopener noreferrer"
            aria-label="Apple-book site"
          >
            <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
          </a>
        </li>
        <li class="shopping_shop">
          <a
            href="http://${bookshop.url}"
            class="shopping__shop-link"
            crossorigin="anonymous"
            rel="noopener noreferrer"
            aria-label="Book-shop site"
          >
            <!-- <img src="" alt="" srcset="" alt="" class="shopping__shop-img" width="" height=""> -->
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">
  <svg class="shopping__btn-icon" width="18" height="18">
      <use></use>
  </svg>
</button>
<p class="shopping_book-description">Book description</p>
</li>`;

}).join('');

