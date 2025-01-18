const displayContainer = document.querySelector('.display-container');

const bookWrapper = document.querySelector('.book-wrapper');

const myLibrary = [
    {
        img: '/images/stillness-is-the-key.jpg',
        title: 'Stillness is the Key',
        author: 'Ryan Holiday',
        numPages: 198,
    },
    {
        img: '/images/the-obstacle-is-the-way.jpg',
        title: 'The Obstacle is the Way',
        author: 'Ryan Holiday',
        numPages: 162,
    },
    {
        img: '/images/ego-is-the-enemy.jpg',
        title: 'Ego is the Enemy',
        author: 'Ryan Holiday',
        numPages: 211,
    },
    {
        img: '/images/think-again.jpg',
        title: 'Think Again',
        author: 'Adam Grant',
        numPages: 324,
    },
];

function Book (title, author, numPages) {
    // this.img = img,
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    // this.readStatus = ,
};

function addBookToLibrary (title, author, numPages) {
    let newBook = new Book(title, author, numPages);
    console.log(newBook);
    myLibrary.push(newBook);
};

function displayBooksInLibrary () {
    // let library = myLibrary;
    let displayLibrary = myLibrary.map((ev) => {
        return `<div class="book-wrapper" name="book-1">
                    <img src="${ev.img}" alt="">
                    <div class="book-details">
                        <p class="title">${ev.title}</p>
                        <p class="author">${ev.author}</p>
                        <p class="number-pages">${ev.numPages}</p>
                        <label for="read-status">Read?</label>
                        <input type="checkbox" name="read-status" id="">
                    </div>
                </div>`;
    });
    console.log(displayLibrary);
    displayLibrary.join('');
    console.log(displayLibrary);
    displayContainer.innerHTML = displayLibrary;
    // for (let i = 0; i < library.length; i++) {
    //     let bookEntry = `<div class="book-wrapper" name="book-${i + 1}">
    //             <img src="/images/stillness-is-the-key.jpg" alt="">
    //             <div class="book-details">
    //                 <p class="title">${library[i].title}</p>
    //                 <p class="author">${library[i].author}</p>
    //                 <p class="number-pages">${library[i].numPages}</p>
    //                 <label for="read-status">Read?</label>
    //                 <input type="checkbox" name="read-status" id="">
    //             </div>
    //         </div>`;
    //     console.log(bookEntry);
    //     displayContainer.append(bookEntry);
    // }
};

window.addEventListener('load', () => {
    console.log(myLibrary)
    displayBooksInLibrary();
})