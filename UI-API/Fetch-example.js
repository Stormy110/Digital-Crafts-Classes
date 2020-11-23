fetch("./sample.txt").then((response) => {
    console.log(response);
  });

  /*
  By default, fetch() makes GET requests.
  You pass in the URL to the resource you want. 
  You chain a call to .then() and pass in 
  your handler function.

What took 8 lines before only takes 3 with fetch()!
Because it uses promises you also have more control 
of when and how you use the request data.

*/