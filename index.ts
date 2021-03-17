let req = await fetch('https://jsonplaceholder.typicode.com/posts/1');
let data = await req.json();
console.log(data);
