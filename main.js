const quoteAuthor = document.querySelector('span');
const quoteText = document.querySelector('p');
const generateBtn = document.querySelector('.generate');
const autoBtn = document.querySelector('.auto');
const stopBtn = document.querySelector('.stop');
let intervalAuthor;


generateBtn.onclick = generateQuotes;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;

// Get Quotes
async function getQuotes() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}

// Generate Quotes
async function generateQuotes() {
  const quotes = await getQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.innerHTML = quote.quote;
  quoteAuthor.innerHTML = quote.author;
}

function startAutoPlay() {
  quoteText.innerHTML = generateQuotes()
  intervalAuthor = setInterval(generateQuotes, 5000);
}

function stopAutoPlay() {
  clearInterval(intervalAuthor);
  quoteText.innerHTML = "Click (Generate) to start reading Quotes.<br>" + "or<br>" + "Click (Auto) to generate automatically.";
  quoteAuthor.innerHTML = "No quotes";
}