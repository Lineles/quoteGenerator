//------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
// CONST (!!! Do not Change !!!) 
//-----------------------------------------------------------------------------------------------------------------------------------------------//
const quote = document.getElementById("quote");
const quoteBackgroung = document.getElementById("quote-background-flex");
const settingsMenu = document.getElementById("settings"); 
const ratioMenu = document.getElementById("ratio"); 
const posiMenu = document.getElementById("posi"); 
const posiInput = document.getElementById("activate-posi");
const quoteBox = document.getElementById("quoteBox");


// Quote Change Function  
//------//
function fetchQuotes() {
        let page = Math.floor(Math.random() * 7268);
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}')
          .then((response) => response.json())
          .then((data) => {
                let randomNumber = Math.floor(Math.random() * 10);
                let quotes = data.data[randomNumber].quoteText;
                let authors = data.data[randomNumber].quoteAuthor;
                quote.innerHTML = quotes + "<br>" + "-" + authors;
          })
}

let QuoteButton = document.getElementById("new-quote")

QuoteButton &&
QuoteButton.addEventListener("click", () => {
quoteBox.classList.toggle("fade-in-out");
        fetchQuotes();
})

//------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
// Randomise Function`s
//-----------------------------------------------------------------------------------------------------------------------------------------------//


// Give Random Number
function giveRandomNumber() {
        return Math.random();
}

// Randomise all function
function randomiseAll() {

        //random Color//
        const randomColor = Math.floor(giveRandomNumber() * 18);   
        colorChange(randomColor); 

        //random Font Color//
        const randomFontColor = Math.floor(giveRandomNumber() * 18);   
        fontColorChange(randomFontColor); 

        //random Alighment//
        const randomAlighment = Math.floor(giveRandomNumber() * 3);
        justifyText(randomAlighment); 

        // random Text Decoration  
        const randomUnderline = Math.floor(giveRandomNumber() * 20);
        if (randomUnderline <= 10){
                changeTextDecoration();
        }

        // random Font Style  
        const randomStyle = Math.floor(giveRandomNumber() * 6);
        if (randomStyle <= 3) {
                changeFontStyle(); 
        }

        // random Font Weight
        const randomWeight = Math.floor(giveRandomNumber() * 10);
        if (randomWeight <= 5) {
                changeFontWeight();
        }

        // random Font Size
        const randomSize = Math.floor(giveRandomNumber() * 3);
        changesize(randomSize);
}




//------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
// Open & Close Menue`s Function`s
//-----------------------------------------------------------------------------------------------------------------------------------------------//


// Open & Close Setings Menu 
function showSettingsMenu() {
        const checkSettingsStatus = settingsMenu.style.display; 
        if (checkSettingsStatus === "none") {
                settingsMenu.style.display = "flex"; 
        } else {
                settingsMenu.style.display = "none"; 
        }    
}

// Open & Close Ratio Menu 
function aspectRatio() {
        const checkRatioStatus = ratioMenu.style.display; 
        if (checkRatioStatus === "none") {
                ratioMenu.style.display = "flex"; 
        } else {
                ratioMenu.style.display = "none"; 
        }    
}

// Open & Close Position Menu 
function positionMenu() {
        const checkRatioStatus = posiMenu.style.display; 
        if (checkRatioStatus === "none") {
                posiMenu.style.display = "flex"; 
        } else {
                posiMenu.style.display = "none"; 
        }    
}

// Open & Close (activate / deactivate) Range Input Menu
function activatePosi() {
        const button = document.getElementById("actvataButton");
        const activate = posiInput.style.display; 
        if (activate === "none") {
                posiInput.style.display = "flex"; 
                button.innerHTML = "Deaktivate";
          changeRatio(4);      
                document.getElementById("RatioButton").style.display = "none";
                ratioMenu.style.display = "none"; 
        } else {
                posiInput.style.display = "none";
                button.innerHTML = "Activate" ;
                quoteBox.style.top = 0;
                quoteBox.style.left = 0;
                document.getElementById("RatioButton").style.display = "block";
        }    
}




//------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
// Quote Styling Function`s
//-----------------------------------------------------------------------------------------------------------------------------------------------//


// Quote Position Function  
function xAxis(){
        const x = document.getElementById("left-right").value;
        const image = quoteBox.style; 
        image.left = x +"px";  
}
    
function yAxis(){
        const y = document.getElementById("up-Down").value;
        const image = quoteBox.style;
        image.top = y +"px";
}

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
                quote.style.fontStyle = "italic";
        } else {
                quote.style.fontStyle = "normal"; 
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
     
 
// Alighn Text Function (Left / Center / Right)
function justifyText(input) {
        const alighments = ["left", "center", "right"]
        const alighment = alighments[input];
        quote.style.textAlign = alighment;
}


// Font Size Change  Function  
function changesize(input) {
        const fontsize = ["24px", "32px", "40px"]
        const size = fontsize[input];
        quote.style.fontSize = size;
}

// Font Color Change  Function  
        function fontColorChange(input) {
                const collorArray = ["#030303", "#353535", "#7C7C7C", "#AFAFAF", "#DBDBDB", "#FEFEFE", "#8931EF", "#F2CA19", "#FF00BD", "#0057E9", "#87E911", "#E11845", "#8BB447", "#428F6F", "#D7B26B", "#E3D6B1", "#DF8879", "#35628A"];
                const color = collorArray[input]             
                quote.style.color = color;
        }
        



//------//
//-----------------------------------------------------------------------------------------------------------------------------------------------//
// Quote Background Styling Function`s
//-----------------------------------------------------------------------------------------------------------------------------------------------//


// Background Color Change  Function  
        function colorChange(input) {
                const collorArray = ["#FAA4A4", "#F8BCBC", "#FEECE5", "#D0D194", "#AFB56B", "#B3876F", "#98B462", "#BDD588", "#DAF0BC", "#EBFBE0", "#79C7A0", "#2A9899", "#620F5B", "#B52F70", "#ED6661", "#EDB435", "#96A53A", "#6F8026"];
                const color = collorArray[input]             
                quoteBackgroung.style.backgroundColor = color;         
        }
        
// Change Background Ratio Function
function changeRatio(input) {
        if (input == 1) {
                quoteBackgroung.style.height = "405px";
                quoteBackgroung.style.width = "720px";
                quoteBox.style.width = "500px";
                quoteBox.style.height = "200px";
        } 
        if (input == 2) {
                quoteBackgroung.style.height = "405px";
                quoteBackgroung.style.width = "405px";
                quoteBox.style.width = "200px";
                quoteBox.style.height = "200px";
        } 
        if (input == 3) {
                quoteBackgroung.style.height = "720px";
                quoteBackgroung.style.width = "405px";
                quoteBox.style.width = "200px";
                quoteBox.style.height = "500px";
        } 
        if (input == 4) {
                quoteBackgroung.style.height = "405px";
                quoteBackgroung.style.width = "1350px";
                quoteBox.style.width = "800px";
                quoteBox.style.height = "150px";
        }     
}