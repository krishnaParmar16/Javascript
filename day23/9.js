function book(obj)
{
    delete obj.pages
    console.log(obj);
}
book(obj={
    title: "Harry Potter", 
    author: "J.K. Rowling", 
    pages: 400
})