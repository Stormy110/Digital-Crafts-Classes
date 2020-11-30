// write content to a file
const fs = require("fs");

fs.writeFile("file.txt", "Hello Node!", "utf8", (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});
// It is import to notice that this is writing to the location that node is running from, not the request location like a  browser

const fs = require("fs");

let ships = [
  {
    type: "Freighter",
    speed: "medium",
    cargo: "large",
    payload: "low",
  },
  {
    type: "Fighter",
    speed: "fast",
    cargo: "none",
    payload: "medium",
  },
  {
    type: "Bomber",
    speed: "slow",
    cargo: "none",
    payload: "high",
  },
];

fs.writeFile("ship-data.json", JSON.stringify(ships), "utf8", (err) => {
  if (err) throw err;
  console.log("The JSON file has been written");
});

//fs.writefile will always overwrite the entire document

//adding content to a file
//there is a fs.appendfile method, it has limited use so dont use it

//we already have ship-data.json
  let ships = JSON.parse(fs.readFileSync("ship-data.json" ))
  console.log(ships)
  const addShip = (newShip)=>{
      ships.push(newShip)
      //below code is needed because it is telling the server to write a file
      fs.writeFile(
          "ship-data.json", 
          JSON.stringify(newShip),
          (err)=>{
              if (err) throw err;
              console.log("New Ship data saved")
          }
      )
  }

  addShip({type:"speeder",speed:"Fast", cargo:"none", payload:"none"})