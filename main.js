// Global Variables
const formModal = document.querySelector('dialog');
const addBook = document.querySelector('#add-book');
const form = document.querySelector('.form');

const myLibrary = []

// the constructor for the book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function created to add book to the myLibrary variable
// creates the new book and pushes it into the array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// displays the pages
function displayPage() {
    // clears everything
    clearAll();

    // loop to add info to each card
    myLibrary.forEach((book, item) => {
        const card = document.createElement("div");
        card.classList.add("new-card");

        const cardTitle = document.createElement("p");
        cardTitle.innerText = book.title;
        cardTitle.classList.add("card-title");

        const cardAuthor = document.createElement("p");
        cardAuthor.textContent = book.author;
        cardAuthor.classList.add("card-author");

        const cardPages = document.createElement("p");
        cardPages.textContent = book.pages;
        cardPages.classList.add("card-pages");

        const cardReadStatus = document.createElement("p");
        cardReadStatus.textContent = book.read ? "Read!" : "Not read yet!";
        cardReadStatus.classList.add("card-read-status");

        const buttondiv = document.createElement("div");
        buttondiv.classList.add("status-btns");

        const readBtn = document.createElement("button");
        readBtn.innerText= "Read!";
        readBtn.classList.add("read-btn");
        readBtn.setAttribute("id", item);
        readBtn.addEventListener("click", () => {
            myLibrary[item].read = true;
            displayPage();
        })

        const notReadBtn = document.createElement("button");
        notReadBtn.innerText = "Not Read";
        notReadBtn.classList.add("not-read-btn");
        notReadBtn.setAttribute("id", item);
        notReadBtn.addEventListener("click", () => {
            myLibrary[item].read = false;
            displayPage();
        });

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.setAttribute("id", item);
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(item, 1);
            displayPage();
        })

        // add all items to their proper parent element
        const books = document.querySelector(".cards");
        buttondiv.appendChild(readBtn);
        buttondiv.appendChild(notReadBtn);

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardReadStatus);
        card.appendChild(buttondiv);
        card.appendChild(removeBtn);
        books.appendChild(card);
    })
}

// clears the form
function clearAll() {
    const booksReset = document.querySelector(".cards");
    booksReset.innerHTML = "";
}

// open the form
addBook.addEventListener("click", () => {
    formModal.showModal();
})

// submitting the form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var title = document.querySelector("#modal-title").value;
    var author = document.querySelector('#modal-author').value;
    var pages = document.querySelector('#modal-pages').value;
    var read = document.querySelector('#book-status').value;

    addBookToLibrary(title, author, pages, read);
    formModal.close();
    form.reset();
    displayPage();
})
