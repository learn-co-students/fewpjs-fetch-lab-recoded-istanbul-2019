//function fetchBooks() {
 window.addEventListener('load',() -> {
   console.log('random-quotes.js loaded')

 })
  fetch('https://anapioficeandfire.com/').then(function(response){
  console.log(respone)
  })
}


function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsBlob(response) {
  return response.blob();
}

function readResponseAsText(response) {
  return response.text();
}

function showImage(responseAsBlob) {
  const container = document.getElementById('img-container');
  const imgElem = document.createElement('img');
  container.appendChild(imgElem);
  const imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}

function showText(responseAsText) {
  const message = document.getElementById('message');
  message.textContent = responseAsText;
}

function logSize(response) {
  const url = response.url;
  const size = response.headers.get('content-length');
  console.log(`${url} is ${size} bytes`);
}


// Fetch JSON ----------

function fetchJSON() {
  fetch('/anapioficeandfire.com/.json')
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(logResult)
    .catch(logError);
}
const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);

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
