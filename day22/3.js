function logSquares(numbers)
{
    numbers.forEach(element => {
            console.log(element*element);
    });
}

const numbers = [1, 2, 3];
logSquares(numbers);