// crete pseudo Quote Array 
                

//------//
// Color Change  Function  
//------//
function colorChange(input) {
        const collorArray = ["#cf2626", "#db9e2c", "#c0c00b", "#0e910e", "#11dfdf", "#2f32e9", "#63159b", "#8f178f", "#e27487"];
        const color = collorArray[input]             
        document.getElementById("quote-background-flex").style.backgroundColor = color;         
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
        


// create function random everything 
        // this function should 
                // randomly chose a collor and call the color function with it 
                // randomly chose a text Style and call the text style function
                // randomly chose a quote
                // randomly chose a alighment






// Open & Close Setings Menu 
const settingsMenu = document.getElementById("settings"); 

function showSettingsMenu() {
        const checkSettingsStatus = settingsMenu.style.display; 
        if (checkSettingsStatus === "none") {
                settingsMenu.style.display = "flex"; 
        } else {
                settingsMenu.style.display = "none"; 
        }    
}