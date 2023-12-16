const express = require('express');
const body_parser = require('body-parser');
const getDrugs = require('./helpers/giveDrugs');
const get_arr = require('./medicines/maneesh')

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
const PORT = 3000;

//sign up and login api to be written here 

app.get('/getPrice', (req, res) => {
    const drug_name = req.body.drug;
    const get_details = getDrugs(drug_name);
    //console.log(drug_name);
    if(get_details.length === 0) {
        res.status(404).send('Drug not found');
    }
    else {
        const response = {
            drug_name: get_details[0],
            drug_price: get_arr
        }
        try{
            res.status(200).send(response);
        }
        catch(err) {
            res.status(500).send('Internal Server Error');
        }
    }
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});