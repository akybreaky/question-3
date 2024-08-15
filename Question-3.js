const express = require('express');
const path = require('path');
const app = express();


app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  }));


app.use(express.static(path.join(__dirname, 'question3.html')));

function validateNumber(string){
    var pattern = /^\d{3}-\d{3}-\d{4}$/
    var matches = string.match(pattern);
    message= ""
    if(matches){
        message = "You've entered a CORRECT phone number.";
    }else{
        message = "You've entered an INCORRECT phone number.";
    }
    return message;
}
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','question3.html'));
});
app.post('/validateNumber', (req,res) =>{
    const {phoneNumber} = req.body;
    const result = validateNumber(phoneNumber);
    res.json({result});
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});