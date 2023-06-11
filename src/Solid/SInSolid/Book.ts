class Book {
  private _author: string;
  private _name: string;

  constructor(author: string, name: string) {
    this._author = author;
    this._name = name;
  }

  getAuthor() {
    return this._author;
  }

  getName() {
    return this._name;
  }

  getBookEntity() {
    return {
      name: this._name,
      author: this._author,
    };
  }

  /**
   * the save method below is breaking ths Single responsibility principle,
   * because this class will have two reasone to change,
   * 1. database persistance logic
   * 2. book entity itself
   */

  //   save() {
  //     /**
  //      * db persistance logic
  //      */
  //   }
}

/**
 * saving entity to database can have it's own class that
 * implements Repository Interface
 */

interface Repository<T> {
  save(entity: T): void;
}

class BookRepository<T extends Book> implements Repository<Book> {
  save(entity: Book): void {
    /**
     * database persistance logic will be here.
     */
  }
}

class AuthorRepository implements Repository<{ name: string; age: number }> {
  save(entity: { name: string; age: number }): void {
    /**
     * database persistance logic for author
     */
  }
}
