
//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta. 
 let boxContainer = document.getElementById("boxContainer");
//Scrivi un programma che stampi in console i numeri da 1 a 100. 
for (let i = 1; i <=100; i++) {
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
        //Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
        boxContainer.innerHTML += "<div class='box'>" + "FizzBuzz" + "</div>";
        //Per i multipli di 3 stampi “Fizz” al posto del numero
    } else if (i % 3 == 0) {
        console.log("Fizz");
        //Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
        boxContainer.innerHTML += "<div class='box'>" + "Fizz"  + "</div>";

        //Per i multipli di 5 stampi "Buzz" al posto del numero
    } else if (i % 5 == 0) {
        console.log("Buzz");
        //Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
        boxContainer.innerHTML += "<div class='box'>" + "Buzz"  + "</div>";
        
    } else {
        console.log(i);
        boxContainer.innerHTML += "<div class='box'>" + i  + "</div>";
    }
}

