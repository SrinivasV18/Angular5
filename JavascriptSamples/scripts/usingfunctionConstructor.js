(function () {
    var Book = function (bookId, bookName, author, price) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
    }
    Book.prototype.toString = function () {
        return this.bookName + ',' + this.author;
    }
    Book.prototype.discount = function () {
        return this.price * .10;
    }
    var javaBook = new Book(101, 'Head First Java', 'Edien', 450);
    var dotnetBook = new Book(102, 'Mastering dotnet', 'Edien', 550);

    var bookList = [javaBook, dotnetBook];
    bookList.forEach(function (eachBook, idx) {
        console.log(++idx + ': Book');
        console.log(eachBook.toString());
        console.log(eachBook.discount());
    });

})();