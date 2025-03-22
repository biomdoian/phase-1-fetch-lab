function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => {
    renderBooks(data);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


    const init = () => {
      const inputForm = document.querySelector("form");
    
      inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
    
        fetch(`http://localhost:3000/movies/${input.value}`)
          .then((response) => response.json())
          .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
    
            title.innerText = data.title;
            summary.innerText = data.summary;
          });
      });
    };
    
    document.addEventListener("DOMContentLoaded", init);