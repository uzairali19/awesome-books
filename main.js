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
      id: this.bookId
    };
    return variable;
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
