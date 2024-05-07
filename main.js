// Global Variables
const formModal = document.querySelector('.form-modal');
const cancelBtn = document.querySelector('#cancel-button');
const submitBtn = document.querySelector('#submit-button');
const addBook = document.querySelector('#add-book');
const titleInput = document.querySelector('#modal-title');
const authorInput = document.querySelector('#modal-author');
const pagesInput = document.querySelector('#modal-pages');
const bookInput = document.querySelector('#book-status');


// the constructor for the book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

// function created to add book to the myLibrary variable
// creates the new book and pushes it into the array
function addBookToLibrary() {
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    read = bookInput.checked;

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Loop throughs the array and display each book on a card on the page => need to create new elements and add them, like making html elements in js


// show the form


// close the form
