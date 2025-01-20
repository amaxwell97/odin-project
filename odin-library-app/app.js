const displayContainer = document.querySelector('.display-container');

const bookWrapper = document.querySelector('.book-wrapper');

const myLibrary = [
    {
        img: '/images/stillness-is-the-key.jpg',
        title: 'Stillness is the Key',
        author: 'Ryan Holiday',
        numPages: 198,
        readStatus: true,
    },
    {
        img: '/images/the-obstacle-is-the-way.jpg',
        title: 'The Obstacle is the Way',
        author: 'Ryan Holiday',
        numPages: 162,
        readStatus: true,
    },
    {
        img: '/images/ego-is-the-enemy.jpg',
        title: 'Ego is the Enemy',
        author: 'Ryan Holiday',
        numPages: 211,
        readStatus: true,
    },
    {
        img: '/images/think-again.jpg',
        title: 'Think Again',
        author: 'Adam Grant',
        numPages: 324,
        readStatus: false,
    },
];

function Book (title, author, numPages) {
    // this.img = img,
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readStatus = readStatus;
};


// Using the form to add a new book to the library

const dialogEl = document.querySelector('#dialogEl');
const submitBtn = document.querySelector('#submitBtn');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const bookRead = document.querySelector('#book-read');

function addBookToLibrary (title, author, numPages, readStatus) {
    let newBook = new Book(title, author, numPages, readStatus);
    console.log(newBook);
    myLibrary.push(newBook);
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(bookRead.value);
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
})


// Displaying the books in myLibrary on the page

function displayBooksInLibrary () {
    // let library = myLibrary;
    let displayLibrary = myLibrary.map((ev) => {
        let isChecked = ev.readStatus ? 'checked' : '';
        return `<div class="book-wrapper" name="book-1">
                    <img src="${ev.img}" alt="">
                    <div class="book-details">
                        <p class="title">${ev.title}</p>
                        <p class="author">${ev.author}</p>
                        <p class="number-pages">${ev.numPages}</p>
                        <label for="read-status">Read?</label>
                        <input type="checkbox" name="read-status" id="${ev.title}" ${isChecked}>
                    </div>
                </div>`;
    });
    displayLibrary.join('');
    displayContainer.innerHTML = displayLibrary;
};

window.addEventListener('load', () => {
    console.log(myLibrary)
    displayBooksInLibrary();
})