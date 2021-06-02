// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var NumberList = document.getElementById('number-items');
var number = 0;

for(x=1; x <= 100; x++){

    if((x % 3 == 0) && (x % 5 == 0)){
        number = 'FizzBuzz' + '<br/>';    
    }

    else if((x % 3 == 0) && (x % 5 !== 0)){
        number = 'Fizz' + '<br/>';    
    }

    else if((x % 5 == 0) && (x % 3 !== 0)){
        number = 'Buzz' + '<br/>';    
    }

    else{
        number = x + '<br/>';    
    }

    NumberList.innerHTML += number;
}

