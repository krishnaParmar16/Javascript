function method(book)
{

        for(let key in book)
        {
            console.log(`${key} : ${book[key]}`);
        }
}

let book={
    title:"Harry Potter",
    author:"J.K. Rowling",
    pages:400
}
method(book)