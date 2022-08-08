//------//
// Pseudo Array  
//------//
 let quotes = [
        "The way to get started is to quit talking and begin doing. - Walt Disney",
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

//------//
// Quote Change Function  
//------//
function randomQuote() {
document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

//------//
// Color Change  Function  
//------//
function colorChange(input) {
        const collorArray = ["#FAA4A4", "#F8BCBC", "#FEECE5", "#D0D194", "#AFB56B", "#B3876F", "#98B462", "#BDD588", "#DAF0BC", "#EBFBE0", "#79C7A0", "#2A9899", "#620F5B", "#B52F70", "#ED6661", "#EDB435", "#96A53A", "#6F8026"];
        const color = collorArray[input]             
        document.getElementById("quote-background-flex").style.backgroundColor = color;         
}

//------//
// Font Color Change  Function  
//------//
function fontColorChange(input) {
        const collorArray = ["#030303", "#353535", "#7C7C7C", "#AFAFAF", "#DBDBDB", "#FEFEFE", "#8931EF", "#F2CA19", "#FF00BD", "#0057E9", "#87E911", "#E11845", "#8BB447", "#428F6F", "#D7B26B", "#E3D6B1", "#DF8879", "#35628A"];
        const color = collorArray[input]             
        document.getElementById("quote").style.color = color;
}

//------//
// Text Style Change Function    
//------//
const quote = document.getElementById("quote");
// Change Font Weight Function   
function changeFontWeight() {
        const boldStatus = quote.style.fontWeight; 
        if (boldStatus === "normal"){
                quote.style.fontWeight = "bold"; 
        } else {
                quote.style.fontWeight = "normal";
        }    
 }       
// Change Font Style Function   
 function changeFontStyle() {
        const italicStatus = quote.style.fontStyle;
        if (italicStatus === "normal"){
                quote.style.fontStyle = "italic" 
        } else {
                quote.style.fontStyle = "normal" 
        }    
 }    
// Change Text Decoration Function   
 function changeTextDecoration() {
        const underlinedStatus = quote.style.textDecoration; 
        if (underlinedStatus === "none"){
                quote.style.textDecoration = "underline";
        } else {
                quote.style.textDecoration = "none";
        }    
 }       
        
//------//
// Alighn Text Function (Left / Center / Right)
//------//
function justifyText(input) {
        const alighments = ["flex-start", "center", "flex-end"]
        const alighment = alighments[input];
        document.getElementById("quote-background-flex").style.justifyContent = alighment;
}

//------//
// Font Size Change  Function  
//------//
function changesize(input) {
        const fontsize = ["24px", "32px", "40px"]
        const size = fontsize[input];
        document.getElementById("quote").style.fontSize = size;
}





//------//
// Randomise all function
//------//
function randomiseAll() {
        const randomNumber = giveRandomNumber();

        //random Color//
        const randomColor = Math.floor(randomNumber * 18);   
        colorChange(randomColor); 

        //random Font Color//
        const randomFontColor = Math.floor(randomNumber * 18);   
        fontColorChange(randomFontColor); 

        //random Alighment//
        const randomAlighment = Math.floor(randomNumber * 3);
        justifyText(randomAlighment); 

        // random Text Decoration  
        const randomUnderline = Math.floor(randomNumber * 20);
        if (randomUnderline <= 10){
                changeTextDecoration();
        }

        // random Font Style  
        const randomStyle = Math.floor(randomNumber * 6);
        if (randomStyle <= 3) {
                changeFontStyle(); 
        }

        // random Font Weight
        const randomWeight = Math.floor(randomNumber * 10);
        if (randomWeight <= 5) {
                changeFontWeight();
        }

        // random Font Size
        const randomSize = Math.floor(randomNumber * 3);
        changesize(randomSize);
}

//------//
// Give Random Number
//------//
function giveRandomNumber() {
        return Math.random();
}

//------//
// Open & Close Setings Menu 
//------//
const settingsMenu = document.getElementById("settings"); 

function showSettingsMenu() {
        const checkSettingsStatus = settingsMenu.style.display; 
        if (checkSettingsStatus === "none") {
                settingsMenu.style.display = "flex"; 
        } else {
                settingsMenu.style.display = "none"; 
        }    
}
