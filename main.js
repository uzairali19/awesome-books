const theBookName = document.querySelector('.name');
const theBookAuthor = document.querySelector('.author');
const submit = document.querySelector('.add');
const books = document.querySelector('.book-list');

let bookList = [];

function addBook(bookName, bookAuthor, bookid) {
  const nameInput = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.setAttribute('id', bookid);
  if (bookName !== undefined && bookAuthor !== undefined) {
    nameInput.append(bookName + ' by ' + bookAuthor + ' ');
  } else {
    nameInput.append(theBookName.value + ' by ' + theBookAuthor.value + ' ');
  }
  nameInput.appendChild(removeButton);
  books.appendChild(nameInput);
  removeButton.addEventListener('click', () => {
    removeButton.parentElement.remove();
    for (let i = 0; i < bookList.length; i++) {
      const books1 = bookList[i].id;
      if (books1 === bookid) {
        bookList.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(bookList));
      }
    }
  });
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const variable = {
    name: theBookName.value,
    author: theBookAuthor.value,
    id: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5),
  };
  addBook(undefined, undefined, variable.id);
  bookList.push(variable);
  localStorage.setItem('books', JSON.stringify(bookList));
  localStorage.getItem('books');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books') !== null) {
    bookList = JSON.parse(localStorage.getItem('books'));
    bookList.forEach((book) => {
      const booksNames = book.name;
      const booksAuthors = book.author;
      const booksid = book.id;
      addBook(booksNames, booksAuthors, booksid);
    });
  }
});
