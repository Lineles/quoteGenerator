// crete pseudo Quote Array 
                


// Color Change    
function colorChange(input) {
        const collorArray = ["#cf2626", "#db9e2c", "#c0c00b", "#0e910e", "#11dfdf", "#2f32e9", "#63159b", "#8f178f", "#e27487"];
        const color = collorArray[input]             
        document.getElementById("quote-background-flex").style.backgroundColor = color;         
}
       


// create function textStyle change
        // this function should give you the posebiliti to choose all 3 options (bold/italic/underlined) at the same time
        // it should also randomly select the options if the random button is presst
        // it should change the Quotes text style to the chosen one
        



// create function text Justify change
function justifyText(input) {
        const alighments = ["flex-start", "center", "flex-end"]
        const alighment = alighments[input];
        document.getElementById("quote-background-flex").style.justifyContent = alighment;
}
        // this function should take 1 parameter (witch is either the choosen alighment or a random alighment)
        // it should cange the Quote alighment to the chosen one
        



// create function quote change 
        // this function should randomly change the showen Quote
        // it should also get triggert when the random button ist presst
        


// create function random everything 
        // this function should 
                // randomly chose a collor and call the color function with it 
                // randomly chose a text Style and call the text style function
                // randomly chose a quote
                // randomly chose a alighment