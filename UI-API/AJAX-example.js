const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
  }
};
request.open("GET", "./sample.txt");
request.send();
// this will send a request to a server located at
// sample.txt, it will retrieve data from that server and return it back to 
// the original browser
/*
5 steps:
1:Create an XMLHttpRequest object
2:Add an onreadystatechange event handler function
3:Set your handler function to check for a final readyState and a successful status
4:open() the request
5:send() the request
*/