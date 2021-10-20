class BookList {
  constructor(bookName, bookAuthor, bookId, books, submit, bookList) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.bookId = bookId;
    this.books = books;
    this.submit = submit;
    this.bookList = bookList;
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
