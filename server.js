const
    express = require('express');
    app = express();

app.use(express.static(__dirname + '/app'));

app.listen('3000');

console.log('working on 3000');