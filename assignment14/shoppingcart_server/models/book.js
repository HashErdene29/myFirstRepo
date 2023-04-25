let db = [];
let counter = 0;

module.exports = class Book {
    constructor(id, title, description, price) {
        this.id = parseInt(id);
        this.title = title;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    edit(){
        const index = db.findIndex(book => book.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    

    static getAll(){
        return db;
    }

    static deleteById(bookId){
        const index = db.findIndex(book => book.id === parseInt(bookId));
        const deletedBook = db[index];
        db.splice(index, 1);
        return deletedBook;
    }

    static findById(bookId){
        const index = db.findIndex(book => book.id === parseInt(bookId));
        if(index > -1){
            return db[index];
        } else {
            throw new Error("Not found");
        }
    }

}