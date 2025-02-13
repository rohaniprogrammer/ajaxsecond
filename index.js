const base = 'https://jsonplaceholder.typicode.com';
fetch(base + "/posts").then(response => {
    // with the response, convert it to JSON, then pass it along
    response.json().then(json => {
        // print that JSON
        console.log(json);
    });
});