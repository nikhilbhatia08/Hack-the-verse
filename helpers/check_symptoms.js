//import { json } from 'body-parser';
//import symps from '../medicines/symptoms.json' assert {type: json};
const symps = require('../medicines/symptoms.json');

function check_symptoms(input_string) {
    //input_string = input_string.toLowerCase;
    console.log(input_string);
    const array_of_symps = symps.symptoms;
    const len = array_of_symps.length;
    var result_array_of_indices = [];
    for(var i = 0; i < len; i++) {
        array_of_symps[i].toLowerCase;
        if(array_of_symps[i].includes(input_string)) {
            result_array_of_indices.push(i);
        }
    }
    return result_array_of_indices;
}

module.exports = check_symptoms;