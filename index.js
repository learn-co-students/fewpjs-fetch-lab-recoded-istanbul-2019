function fetchBooks() {
  return fetch('https://5e2dbab63b0d640014be0eb6.mockapi.io/api/v0/books')
  .then(res => res.json())
  .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
