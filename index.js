const express = require('express');
const mpd_generator = require("mpd-generator");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
    var data = {
        path: "workspace",
        inputFile: "tmp",
        format: ".mkv",
    };
    mpd_generator.main(data);
})

app.listen(3000, function () {
    console.log('Server is running: 3000');
});