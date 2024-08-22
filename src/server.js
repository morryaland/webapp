const express = require("express");
const port = process.env.PORT | 3000;

const app = express();

app.use(express.static("public"));

app.get(/.*(\.)html$/, function (request, response) {
    response.send(request.url)
});

app.listen(port);
