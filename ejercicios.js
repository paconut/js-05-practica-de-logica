//Ejercicio 1

function userProfile(username, age, movies) {
    console.log('The film' + movies[0] + 'is one of my favorites');
    return 'The film' + movies[0] + 'is one of my favorites';
}

//Ejercicio 2

function highestNumber(numbers) {
    let highest = 0;
    for (let number in numbers) {
        if (number > highest) {
            highest = number;
        }
    }
}

//Ejercicio 3

function alarm(seconds) {
    let countdown = seconds;
    while (countdown > 0) {
        console.log(`Tiempo para la alarma: ${countdown} segundos`);
        countdown--;
    }
    console.log("Alarma");
}

//Ejercicio 4

function plaindrome(phrase) {
    phrase = phrase.toLowerCase().replace(' ', '');
    phraseReversed = phrase.reverse();
    if (phrase == phraseReversed) {
        console.log("Es palindromo");
    } else {
        console.log("No lo es");
    }
}

//Ejercicio 5

function factorial(number) {
    let numFactorial = 1;
    for (number; number >= 1; number--) {
        numFactorial *= number;
    }
    console.log(numFactorial);
}

//Ejercicio 6

function flatArray(matrix) {
    let flattened = [];
    function flattenRecursive(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattenRecursive(arr[i]);
            } else {
                flattened.push(arr[i]);
            }
        }
    }

    flattenRecursive(matrix);
    return flattened;
}