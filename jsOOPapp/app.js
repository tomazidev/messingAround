// Book Constructor
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}
UI.prototype.addBookToList = function (book) {
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
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
UI.prototype.showAlert = function (msg, className) {
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
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
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
        ui.clearFields();
    }

    e.preventDefault();
});

// Delete event for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'sucess');
    e.preventDefault();
})