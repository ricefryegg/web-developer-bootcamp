var isEven = (n) => {
    return n % 2 == 0;
}

var factorial = (n) => {
    if (n <= 1) { 
        return n; 
    }
    return n * factorial(n - 1);
}

var kebabToSnake = (str) => {
    return str.replace("-", "_");
}