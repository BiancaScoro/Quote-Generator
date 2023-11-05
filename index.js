var quotes = [
    'Well done is better than well said. - Benjamin Franklin',
    'It is during our darkest moments that we must focus to see the light.<br> - Aristotle',
    'Be yourself; everyone else is already taken. - Oscar Wilde',
    'You will face many defeats in life, but never let yourself be defeated. <br>-Maya Angelou',
    'Life is a succession of lessons which must be lived to be understood. <br> -Ralph Waldo Emerson',
    'Life is trying things to see if they work. -Ray Bradbury'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}