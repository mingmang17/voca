const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello' , (req,res) => {
    res.send({message: '시발111!'});
});

app.get('/api/customers', (req,res) => {
    res.send([
        {
        'id' : 1,
        'gender' : '남자',
        'name':'홍길동',
        'birthday':'940121'
       },
       {
        'id' : 2,
        'gender' : '여자',
        'name':'이민주',
        'birthday':'950210'
       },
       {
        'id' : 3,
        'gender' : '남자',
        'name':'안재현',
        'birthday':'870506'
       }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));