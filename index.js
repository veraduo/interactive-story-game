const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const util = require('util');

const app = express();

app.use(
    bodyParser.urlencoded({
      extended: true
    })
);

app.use(bodyParser.json());

app.post("/echo", function(req, res) {
    console.log(`post/${util.inspect(req.body,false,null)}`);
    var speech =
      req.body.sessionInfo &&
      req.body.sessionInfo.parameters &&
      req.body.sessionInfo.parameters.echoText
        ? req.body.sessionInfo.parameters.echoText
        : "Seems like some problem. Speak again.";
    console.log("Speech variable: " + speech);
    
    var response = {
      messages: [
        {
          text: "Message response",
          output_audio_text: "Speech reponse"
        }
      ]
    };
    
    return res.json({
      fulfillment_response: reponse
    });
});



// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json({limit: '50mb'})); 
//   app.use(express.urlencoded({limit: '50mb', extended: true}));

// app.use((req, res, next) => {
//     res.status(404).send("Sorry, can't find that!")
// });

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;

//     console.log(err.message);

//     res.locals.error = req.app.get('env') === 'development' ? err: {};

//     res.status(err.status || 500).send("Something broke!");
// });

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});