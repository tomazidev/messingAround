class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list'); // Parent
        const row = document.createElement('tr'); //Child
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    };
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        
        // Get Parent
        const container = document.querySelector('.container');
        // Get Child
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
        // Timeout
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000) 
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

class Storage {
    static getBooks () {
        let books = [];
        // Checks is data been set in localstorage
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            // If data found in localStorage turn String to object
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBook () {
        const books = Storage.getBooks();

        books.forEach(function (book) {
            const ui = new UI;
            ui.addBookToList(book);
        });
    }
    static addBook (book) {
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook (isbn) {
        const books = Storage.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Storage.displayBook);

// Event Listener for adding
document.getElementById('book-form')
.addEventListener('submit', function(e) {
    // Get form Values
    const title = e.target.title.value;
    const author = e.target.author.value;
    const isbn = e.target.isbn.value;

    // Instatiate Book
    const book = new Book(title, author, isbn);
    // Instatiate Book
    const ui = new UI();

    if (title === '', author === '', isbn === ''){
        ui.showAlert('Please Book into fields', 'error')
    } else {
        ui.showAlert('Book sucesfully added', 'sucess');
        ui.addBookToList(book);
        Storage.addBook(book);
        ui.clearFields();
    }

    e.preventDefault();
});

// Delete event for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed!', 'sucess');
    e.preventDefault();
})