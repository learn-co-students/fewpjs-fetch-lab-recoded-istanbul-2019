function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
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


// In index.js, there is an empty function, fetchBooks(), that is called when index.html 
// is loaded. To pass this lab, this function should include a fetch request to the 
// Game of Thrones API ('https://anapioficeandfire.com/api/books'). The returned response 
// should be converted to JSON. Then, call the second function, renderBooks(), passing in the 
// API's returned JSON data as the argument. To check if you have done this correctly, open up 
// the index.html page of this lab and you should see a list of Game Of Thrones titles on your 
// webpage.

// Note: The tests in this lab need access to the fetch() request inside fetchBooks(). 
// In order to give them access, write you solution so that fetchBooks() returns the fetch(). 
// This will not change the behavior of your fetch().