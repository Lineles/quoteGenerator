// crete pseudo Quote Array 
                

//------//
// Color Change  Function  
//------//
function colorChange(input) {
        const collorArray = ["#FAA4A4", "#F8BCBC", "#FEECE5", "#D0D194", "#AFB56B", "#B3876F", "#98B462", "#BDD588", "#DAF0BC", "#EBFBE0", "#79C7A0", "#2A9899", "#620F5B", "#B52F70", "#ED6661", "#EDB435", "#96A53A", "#6F8026"];
        const color = collorArray[input]             
        document.getElementById("quote-background-flex").style.backgroundColor = color;         
}



//------//
// Color Change  Function  
//------//
function fontColorChange(input) {
        const collorArray = ["#FAA4A4", "#F8BCBC", "#FEECE5", "#D0D194", "#AFB56B", "#B3876F", "#98B462", "#BDD588", "#DAF0BC", "#EBFBE0", "#79C7A0", "#2A9899", "#620F5B", "#B52F70", "#ED6661", "#EDB435", "#96A53A", "#6F8026"];
        const color = collorArray[input]             
        document.getElementById("quote").style.color = color;
}


//------//
// Text Style Change Function`s     
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
        

// create function quote change 
        // this function should randomly change the showen Quote
        // it should also get triggert when the random button ist presst
        

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