const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hasnain');
});



app.listen(8000, () => {
    console.log('Server is listenin on PORT :' + PORT);
})