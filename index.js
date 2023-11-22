// Select the button and input fields
let button = document.querySelector('[button-convert]');
let redInput = document.querySelector('[data-red]');
let greenInput = document.querySelector('[data-green]');
let blueInput = document.querySelector('[data-blue]');
let hexOutput = document.querySelector('[data-hex]');

// Function to convert RGB to HEX
function rgbToHex(red, green, blue) {
    // Convert each RGB value to hexadecimal and concatenate them
    const hexidecimalCode = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    return hexidecimalCode;
}

//This basically just adds an event listener for the button click
button.addEventListener('click', function() {
    //what will happen is that this function will get user entered RGB values 
    let red = parseInt(redInput.value);
    let green = parseInt(greenInput.value);
    let blue = parseInt(blueInput.value);

    //convert the RGB to HEXEDECIMAL
    const hexidecimalCode = rgbToHex(red, green, blue);

    //what this code will basicall do is displa the HEX code
    hexOutput.value = hexidecimalCode;
});