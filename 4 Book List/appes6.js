class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // create TR ele
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

    showAlert(message, className) {
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
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks(){  
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) { 
            const ui = new UI;

            // add books to list 
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


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

    // validate 
    if(title === '' || author === '' || isbn === ''){

        // error alert 
        ui.showAlert('Please Fill in all the fields', 'error');

    }else{
        // Add book to lisy
        ui.addBookToList(book);

        // add to local storage 
        Store.addBook(book);

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

    // Delete Book
    ui.deleteBook(e.target);

    // Remove From LocalStorage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show delete alert
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});