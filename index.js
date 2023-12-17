const express = require('express');
const body_parser = require('body-parser');
const getDrugs = require('./helpers/giveDrugs');
const get_arr = require('./medicines/maneesh');
const getSymp = require('./helpers/check_symptoms');
const give_drug_from_sym = require('./helpers/give_drug_from_symp');

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

app.get('/getMedFromSymp', async(req, res) => {
    const getsymp = req.body.symp;
    // what can be done 
    // 1. check if the symp is in the list of symps
    const symp_arr = getSymp(getsymp);
    const drug_arr = give_drug_from_sym(symp_arr);
    try{
        res.status(200).send(drug_arr);
    }
    catch(err) {
        res.status(500).send('Internal Server Error');  
    }
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});