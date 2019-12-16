// Book Class
class Book {
    // Book Constructor
    constructor(bookName, bookAuthor, bookISBN){
        this.title = bookName;
        this.author = bookAuthor;
        this.isbn = bookISBN;
    }
}

// Class UI
class UI {
    // add new book to the UI table
    addBookToList (newBookDetails) {
        // grab the ul list container(tbody)
        const list = document.querySelector('.booksList');

        // create new row
        const newBookItem = document.createElement('tr');

        // add book details to item
        newBookItem.innerHTML = `
            <td>${newBookDetails.title}</td>
            <td>${newBookDetails.author}</td>
            <td>${newBookDetails.isbn}</td>
            <td>
                <a href="#" class="delete-book fa fa-times-circle"></a>
            </td>
        `;

        list.appendChild(newBookItem);
    }

    // clear field aafter submit
    clearFields () {
        document.getElementById('bookName').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookISBN').value = '';
    }

    // Alert message
    showAlert (message, className) {
        // create err element
        const msgDiv = document.createElement('div');

        // add class to
        msgDiv.className = `alert ${className}`;

        // add message to alert
        msgDiv.appendChild(document.createTextNode(message));

        // get body
        const body = document.querySelector('body');

        // add message div to body
        body.appendChild(msgDiv);

        // remove message after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // delete book from list
    deleteBookFromList (book) {
        console.log(book.classList.contains('delete-book'));

        if(book.classList.contains('delete-book') === true){
            book.parentElement.parentElement.remove();
        }
    }
}

// listen to the form submit event
document.getElementById('bookListForm').addEventListener('submit', function (e) {
    // get new book values
    const bookName = document.getElementById('bookName').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookISBN = document.getElementById('bookISBN').value;

    // Instatiate Book Object
    const newBook = new Book(bookName, bookAuthor, bookISBN);

    // Instatiate UI Object
    const ui = new UI();

    if(bookName === '' || bookAuthor === '' || bookISBN === ''){
        // show err alert
        ui.showAlert('Please add all the book detiils.', 'error');
    }else{
        // add book to list method
        ui.addBookToList(newBook);

        // clear fields after submit
        ui.clearFields();

        // show success alert
        ui.showAlert('Book Added Successfully !!!', 'success');
    }

    e.preventDefault();
});

// Delete book from lisit
document.querySelector('.booksList').addEventListener('click', function (e) {

    // instatiate UI Object
    const ui = new UI();

    // delete book proto
    ui.deleteBookFromList(e.target);

    // show deleted message
    ui.showAlert('Book Deleted Successfully', 'success');

    e.preventDefault();
});