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