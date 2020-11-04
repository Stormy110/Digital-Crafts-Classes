/*python3 -m http.server xxxx
# xxxx is the port number. It needs to be above 3000 by convention the default for local servers are often 8000 or 5000
*/

//INCLUDING JAVASCRIPT FILES IN DOCUMENTS
/*
<!-- index.html -->
<!DOCTYPE html>
...

        <script>
            //this is just for testing
            alert('Hello Browser')
        </script>
    </body>
</html>
*/


// INCLUDING A JS FILE

//script.js
/*
alert('Look I am loaded')
console.log('This is in the console.')    
<!-- index.html -->
<!DOCTYPE html>
...

        <script src="style.js"></script>
    </body>
</html>
*/

// LAUNCHING WEBSERVER WITH NODE
/*
npm install -g serve
...#lots of stuff happens
cd ~/folder/you/want/to/server/from
serve -p XXXX
*/