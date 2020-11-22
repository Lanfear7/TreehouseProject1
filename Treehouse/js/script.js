/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
 {
    quote: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',
    source: 'George Bernhard Shaw',
    citation: 'https://medium.com/swlh/21-of-the-worlds-most-powerful-quotes-updated-for-today-and-tomorrow-6b7634358c2',
    year: 'N/A'
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    source: 'Nelson Mandela',
    citation: 'https://blog.hubspot.com/sales/famous-quotes',
    year: 'N/A'
  },
  {
    quote: "The way to get started is to quit talking and begin doing.", 
    source: 'Walt Disney',
    citation: 'https://blog.hubspot.com/sales/famous-quotes',
    year: 'N/A'
  },
  {
    quote: "If you're the smartest person in the room, you're in the wrong room",
    source: 'Lorne Michaels',
    citation: "https://www.executiveforum.com/never-be-the-smartest-person-in-the-room/#:~:text=%E2%80%9CIf%20you're%20the%20smartest,who%20are%20smarter%20than%20you.",
    year: 'N/A'
  },
  {
    quote: 'A room without books is like a body without a soul',
    source: 'Marcus Tullius Cicero',
    citation: 'https://www.goodreads.com/quotes',
    year: 'N/A'
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote (arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  let quote = arr[randomNum];
  return quote

}
/***
 * `printQuote` function
***/
function printQuote(){
  let quote = getRandomQuote(quotes);
  let msg = '';
  msg += `<p class='quote'> ${quote.quote} </p>`;
  msg += `<p class='source'> ${quote.source} `;
  if (quote.source){
    msg += `<span class="citation"> ${quote.citation} </span>`; /* if the quote has a source */
  };
  if(quote.year){
    msg += `<span class="year"> ${quote.year} </span> `;/*if the quote has a year*/
  };
  msg += `</p>`

  let randomValue = () => Math.floor(Math.random() * 256); /* this will get the rgb value for the background*/
  function randomRGB(value){
    let backGround = `rgb( ${value()} , ${value()} , ${value()} )` /*all the color code to a string*/
    return backGround;
  }
  document.body.style.backgroundColor = randomRGB(randomValue) /*this will call the function to get the background color */
  return document.getElementById('quote-box').innerHTML = msg;
  
}
setInterval(printQuote,15000); /*timer*/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
