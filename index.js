// create pseudo Quote Array 
 let quotes = [
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "The journey of a thousand miles begins with one step. - Lao Tzu",
        "That which does not kill us makes us stronger. - Friedrich Nietzsche",
        "You must be the change you wish to see in the world. - Mahatma Gandhi",
        "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
        "Life is like a box of chocolates. You never know what you’re going to get. - Forrest Gump",
        "Dream big and dare to fail. - Norman Vaughan",
        "If you judge people, you have no time to love them. - Mother Teresa",
        "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
        "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. - Mark Twain"
     ]           

 let firstQuote = quotes[Math.floor(Math.random() * quotes.length)];
 let displayQuote = document.getElementById("quote").innerHTML = `${firstQuote}`;

 // create function quote change 
        // this function should randomly change the showen Quote
        // it should also get triggert when the random button ist presst

function randomQuote() {
document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}


// create function color change
        // this function should take 1 parameter (witch is either the choosen collor or a random collor)
        // it should change the Backgroundcollor of the main Div element to the chosen color
        // it should also make the border of the aktiv button red



// create function textStyle change
        // this function should give you the posebiliti to choose all 3 options (bold/italic/underlined) at the same time
        // it should also randomly select the options if the random button is presst
        // it should change the Quotes text style to the chosen one
        // it should also make the border of the aktiv button red



// create function text Alighnt change
        // this function should take 1 parameter (witch is either the choosen alighment or a random alighment)
        // it should cange the Quote alighment to the chosen one
        // it should also make the border of the aktiv button red

// create function random everything 
        // this function should 
                // randomly chose a collor and call the color function with 