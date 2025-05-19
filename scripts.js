function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('addBookForm');
  const container = document.querySelector('.Books');  // <-- cambio aquí

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = parseInt(document.getElementById('pages').value, 10);
    const isRead = document.getElementById('isRead').checked;

    if (!title || !author || isNaN(pages)) {
      alert('Please fill all fields correctly.');
      return;
    }

    const newBook = new Book(title, author, pages, isRead);

    const bookDiv = document.createElement('div');
    bookDiv.textContent = newBook.info();
    bookDiv.style.padding = '10px';
    bookDiv.style.marginTop = '10px';
    bookDiv.style.border = '1px solid #444';
    bookDiv.style.backgroundColor = isRead ? '#e0ffe0' : '#ffe0e0';

    container.appendChild(bookDiv);

    form.reset();
  });
});
