// Book Constructor 

function Book(title, author, isbn) { 
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor 
function UI() { }

// UI Constructor 
function Store() { }

Store.prototype.getBooks = function(){ 
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
}

Store.prototype.displayBooks = function() {
    // Instanciate UI Object
    const store = new Store();

    const books = store.getBooks();

    books.forEach(function (book) { 
        const ui = new UI;

        // add books to list 
        ui.addBookToList(book);
    });
}

Store.prototype.addBook = function(book) {
    // Instanciate UI Object
    const store = new Store();

    const books = store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.removeBook = function(isbn) {
    // Instanciate UI Object
    const store = new Store();

    const books = store.getBooks();

    books.forEach(function (book, index) {
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

// Add book to list
UI.prototype.addBookToList = function (book) { 
    // grab the tbody
    const list = document.getElementById('book-list');
    
    // create TR element
    const row = document.createElement('tr');

    // insert COL into TR
    row.innerHTML =  `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
    `;

    // append html to table
    list.appendChild(row);
}

// Delete Book
UI.prototype.deleteBook = function (target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// clear fields after add
UI.prototype.clearFields = function () { 
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// show error alert
UI.prototype.showAlert = function (message, className) { 
    // Create err div
    const div = document.createElement('div');
    // Add class to the div
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));

    // get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    // insert alter
    container.insertBefore(div, form);

    // hide alert after 3sec
    setTimeout(function () { 
        document.querySelector('.alert').remove();
    }, 3000);
}


// Event Liteners for add book
document.getElementById('book-form').addEventListener('submit', function (e) { 
    // Get form values
    const   title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
    
    // Instanciate Book Object
    const book = new Book(title, author, isbn);

    // Instanciate UI Object
    const ui = new UI();

    // Instanciate UI Object
    const store = new Store();

    // validate 
    if(title === '' || author === '' || isbn === ''){
        // error alert 
        ui.showAlert('Please Fill in all the fields', 'error');

    }else{
        // Add book to lisy
        ui.addBookToList(book);

        // add to local storage 
        store.addBook(book);

        // show success alter
        ui.showAlert('Book added!', 'success');

        // Clear all input 
        ui.clearFields();
    }

    // console.log(ui);
    
    e.preventDefault();
});

// Event Liteners for delete
document.getElementById('book-list').addEventListener('click', function (e) { 
    // Instanciate UI Object
    const ui = new UI();

    // Instanciate UI Object
    const store = new Store();

    // Delete Book
    ui.deleteBook(e.target);

    // Remove From LocalStorage
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show delete alert
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});

// DOM Load Event
document.addEventListener('DOMContentLoaded', function () { 
    // Instanciate UI Object
    const store = new Store();
    
    store.displayBooks()
});