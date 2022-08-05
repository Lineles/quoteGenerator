// crete pseudo Quote Array 
                


// Color Change  Function  
function colorChange(input) {
        const collorArray = ["#cf2626", "#db9e2c", "#c0c00b", "#0e910e", "#11dfdf", "#2f32e9", "#63159b", "#8f178f", "#e27487"];
        const color = collorArray[input]             
        document.getElementById("quote-background-flex").style.backgroundColor = color;         
}
       


// create function textStyle change
        // this function should give you the posebiliti to choose all 3 options (bold/italic/underlined) at the same time
        // it should also randomly select the options if the random button is presst
        
        



// Alighn Text Function (Left / Center / Right)
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