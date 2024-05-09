// Global Variables
const formModal = document.querySelector('.form-modal');
const cancelBtn = document.querySelector('#cancel-button');
const submitBtn = document.querySelector('#submit-button');
const addBook = document.querySelector('#add-book');
const titleInput = document.querySelector('#modal-title');
const authorInput = document.querySelector('#modal-author');
const pagesInput = document.querySelector('#modal-pages');
const bookInput = document.querySelector('#book-status');
const libraryCard = document.querySelector('.card');
const library = document.querySelector('.container');


// the constructor for the book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function to change the read status on the card


const myLibrary = [];

// function created to add book to the myLibrary variable
// creates the new book and pushes it into the array
function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = bookInput.checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Loop throughs the array and display each book on a card on the page => need to create new elements and add them, like making html elements in js


// show the form
addBook.addEventListener("click", () => {
    formModal.showModal();
})

// close the form and adds book to the library
submitBtn.addEventListener("click", () => {
    addBookToLibrary();
    formModal.close();
});

// closes the form but there's no submission
cancelBtn.addEventListener("click", () => {
    formModal.close();
})