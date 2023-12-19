// Uppgift 5
// Lyssna på 'DOMContentLoaded'-händelsen för att säkerställa att HTML-dokumentet är helt laddat innan scriptet körs
document.addEventListener('DOMContentLoaded', function () {
    // Hämta referenser till olika HTML-element baserat på deras ID
     // Input för färg
    var fargInput = document.getElementById('farg'); 
    // Input för innehåll (text)
    var innehallInput = document.getElementById('innehall'); 
    // Checkbox för att välja om div ska ha stil eller inte
    var divStyleCheckbox = document.getElementById('divStyle'); 
    // Knapp för att ta bort output-div
    var removeButton = document.getElementById('removeButton'); 
    // Div-elementet där output visas
    var outputDiv = document.getElementById('outputDiv'); 

    // När användaren skriver in något i färgfältet
    fargInput.addEventListener('input', function () {
        // Om checkboxen är ikryssad, ändra bakgrundsfärgen på output-diven till det angivna värdet
        if (divStyleCheckbox.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        }
    });

    // När användaren skriver in något i innehållsfältet
    innehallInput.addEventListener('input', function () {
        // Uppdatera textinnehållet i output-diven med det som skrivs i innehållsfältet
        outputDiv.textContent = innehallInput.value;
    });


    
    //uppgift 6
    // När användaren ändrar status på checkboxen
    divStyleCheckbox.addEventListener('change', function () {
        // Om checkboxen är ikryssad, använd färgvärdet från färgfältet som bakgrundsfärg
        if (this.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        } else {
            // Om checkboxen inte är ikryssad, ta bort bakgrundsfärgen
            outputDiv.style.backgroundColor = '';
        }
    });

    // När användaren klickar på 'ta bort'-knappen
    removeButton.addEventListener('click', function () {
        // Ta bort output-diven från dokumentet
        outputDiv.remove(); 
    });
});