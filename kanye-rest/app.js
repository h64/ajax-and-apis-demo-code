// ⛓️ Unit 1 Proficiencies:
// Use HTML, CSS creates the Skeleton and the look of our webpages
// Use JS to implement functionalities into our webpages
// Particularly, used DOM APIs to manipulate the HTML & CSS

// ⛓️ AJAX & APIs Lesson
// 🍎 What is an API? (Application Programming Interface)
// Analogy: It's like a waiter at a restaurant
// APIs allow us to access resources via a interface

// What can you do with an API?
// It's whatever the owner of the resources allows you to do
// via their interface (API)
// Boiled down - an API allows you do to
// CRUD
// Create
// Read
// Update
// Delete

// 🍏 What is AJAX? (Asynchronous JavaScript and XML)
// Asynchronous - a "fire and forget operation"
// Make a "request" - then you wait for the "response"

// JSON - JavaScript Object Notation

let btnEl = document.querySelector('#btn')
let quoteEl = document.querySelector('#quote')

// JavaScript "Promise"
function stayWoke() {
    fetch('https://api.kanye.rest') // 1. Make the request
        .then((response) => { // 2. When the response eventually comes back
            // 3. Do something with the data
            console.log(response)
            return response.json() // 4. Converting the data to usable JSON
        })
        .then((data) => {
            console.log(data)
            quoteEl.textContent = data.quote
        })
}
    


btnEl.addEventListener('click', stayWoke)
// 💪 Take 5 min
// Unit 1 Proficiencies:
// Save some DOM references to the <h2> and the <button>
// Refactor our code so that the fetch call resides within a function
// Add an event listener to the button that calls our function
// Make it so that the function changes the .textContent of our <h2>
// every time you click it