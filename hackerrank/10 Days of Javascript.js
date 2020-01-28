// Day 1: Functions
// Task
// Implement a function named factorial that has one parameter: an integer, n.
//It must return the value of n! (i.e., n factorial).


function factorial(n) {
    if (n > 1) {
        return n * factorial(n-1);
    } else {
        return 1;
    }
}

// Day 2: Conditional Statements: If-Else

function getGrade(score) {
    if ( score > 25 && score <= 30) {
        return 'A';
    } else if ( score > 20 && score <= 25) {
        return 'B';
    } else if ( score > 15 && score <= 20) {
        return 'C';
    } else if ( score > 10 && score <= 15) {
        return 'D';
    } else if ( score > 5 && score <= 10) {
        return 'E';
    } else {
        return 'F';
    }
}

// Day 2: Conditional Statements: Switch

function getLetter(s) {
    let letter;
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C'
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D';
            break;
    }
    return letter;
}

// Day 2: Loops

function vowelsAndConsonants(s) {
    const vowels = 'aeiouy';
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        };
    };
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            console.log(s[i]);
        };
    };
};

