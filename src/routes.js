const { addBooksHandler, getAllBooksHandler, getBooksById, updateBooksById, deleteBooksById } = require('./handler')

const routes = [
  // Create
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler
  },
  // Read
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  // Read by id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksById
  },
  // Update
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBooksById
  },
  // Delete
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksById
  }
]

module.exports = routes
