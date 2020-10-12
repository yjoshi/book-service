# My Very Own Book Service

### Feel free to add to or build off of this project!! New ideas are welcome too!
The service endpoints are as follows (All endpoints are preceded by /library/

## Get

 - /books
	 - If titles is provided get book(s) by title. Otherwise just return all book data
 - /books/{id}
	 - Returns book data where the id matches that which is provided

## Post

 - /books
	 - Accepts a book as a parameter and adds it to the database

## Put

 - /books/{id}
	 - Updates the book with the id that matches the provided id

## Delete

 - /books/{id}
	 - Deletes the book with the id that matches the provided id
 - /books/deleteAll
	 - Deletes all books

## Database

Originally built with MongoDB called Library (see [book/src/main/resources/application.properties](https://github.com/harpcharley/book-service/blob/master/book/src/main/resources/application.properties) for more info)

