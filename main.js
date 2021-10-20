class BookList {
  constructor(bookName, bookAuthor, bookId, books, submit, bookList) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookId = bookId;
    this.books = books;
    this.submit = submit;
    this.bookList = bookList;
  }

  book() {
    this.bookId = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);
    const variable = {
      name: this.bookName.value,
      author: this.bookAuthor.value,
      id: this.bookId,
    };
    return variable;
  }

  addBook(bookName, bookAuthor, bookId) {
    const list = document.createElement('li');
    const nameInput = document.createElement('a');
    nameInput.classList.add('book-data');
    list.appendChild(nameInput);
    const removeButton = document.createElement('button');
    removeButton.classList.add('button');
    removeButton.classList.add('is-danger');
    removeButton.innerText = 'Remove';
    if (bookName !== undefined && bookAuthor !== undefined) {
      removeButton.setAttribute('id', bookId);
      nameInput.append(bookName + ' by ' + bookAuthor + ' ');
    } else {
      removeButton.setAttribute('id', this.bookId);
      nameInput.append(this.bookName.value + ' by ' + this.bookAuthor.value + ' ');
    }
    nameInput.appendChild(removeButton);
    this.books.appendChild(nameInput);
    removeButton.addEventListener('click', (e) => {
      e.preventDefault();
      removeButton.parentElement.remove();
      const books = this.bookList;
      const index = books.findIndex((book) => book.id === bookId);
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    });
  }

  submitBook() {
    this.submit.addEventListener('click', (e) => {
      e.preventDefault();
      this.addBook(undefined, undefined);
      this.bookList.push(this.book());
      localStorage.setItem('books', JSON.stringify(this.bookList));
      this.bookName.value = '';
      this.bookAuthor.value = '';
    });
  }

  localStorage() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('books') !== null) {
        this.bookList = JSON.parse(localStorage.getItem('books'));
        this.bookList.forEach((book) => {
          const newBookName = book.name;
          const newBookAuthor = book.author;
          const newBookId = book.id;
          this.addBook(newBookName, newBookAuthor, newBookId);
        });
      }
    });
  }
}

const bookName = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const books = document.querySelector('.book-list');
const submit = document.querySelector('.add');
const bookList = [];
const booksLists = new BookList(bookName, bookAuthor, null, books, submit, bookList);

booksLists.submitBook();
booksLists.localStorage();
