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
  if (bookName != undefined && bookAuthor != undefined) {
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
