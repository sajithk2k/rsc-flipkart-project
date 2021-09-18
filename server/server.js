const express = require("express");
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.get("/api/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'home_page.json'));
  });

  app.get("/api/slots/:start/:end", (req,res) => { 
    let start = req.params.start, end = req.params.end;
    fs.readFile('../home_page.json', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      let page = [];
      let temp = JSON.parse(data);
      let slots = temp["RESPONSE"]["slots"];
      for(let i=start;i<=end;i++){
        page.push(slots[i-1]);
      }
      res.send(page);
    })
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});