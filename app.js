// 🍎 URL stands for (Uniform Resource Locator)
// Components of a URL
// The Protocol: https
// The Host: googleapis.com
// The Port: 80 for http, 443 for https
// The Path: /books/v1/volumes
// The Query: q=harry+potter

// https://www.googleapis.com/books/v1/volumes?q=harry+potter

// DOM References
const formEl = document.getElementById("book-form")
const searchEl = document.getElementById('search-term')
const bookEl = document.querySelector('#book')

// Functions
function handleSubmit(event) {
    event.preventDefault() // stops the form from refreshing the page

    // ES6 (2015) ECMAScript2015
    const url = 'https://www.googleapis.com/books/v1/volumes?q='
    // Construct a fetch .then .then sequence for the GoogleBooks URL
    fetch(url + searchEl.value)
        .then((response) => {
            return response.json()
        })
        /*
            <div>
                <h2>title goes here</h2>
                <p>authors go here</p>
                <p>the description goes here</p>
                <img src="the link goes here">
            </div>
        */
        .then((data) => {
            
            // Create all the DOM elements we need
            let divEl = document.createElement('div')
            let titleEl = document.createElement('h2')
            let authorEl = document.createElement('p')
            let descriptionEl = document.createElement('p')
            let imgEl = document.createElement('img')
            
            // Handy variables
            let books = data.items
            console.log(books[0])
            let authors = books[0].volumeInfo.authors
            let title = books[0].volumeInfo.title
            let thumbnail = books[0].volumeInfo.imageLinks.thumbnail
            let description = books[0].volumeInfo.description

            // Fill out the DOM elements with our data
            authorEl.textContent = `Authors: ${authors}`
            // "Authors: " + authors
            titleEl.textContent = title
            descriptionEl.textContent = description
            imgEl.setAttribute('src', thumbnail)

            // Add to the DOM
            bookEl.textContent = '' // clear old books
            divEl.append(titleEl, authorEl, descriptionEl, imgEl) 
            bookEl.append(divEl) //add the new one

            console.log(authors, title, thumbnail, description)
        })
}

// Event Listener
formEl.addEventListener('submit', handleSubmit)