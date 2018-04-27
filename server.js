const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.use('/', express.static(path.join(_dirname, 'public')));

app.listen(3000, () => console.log("YAY It does the thing!"))
