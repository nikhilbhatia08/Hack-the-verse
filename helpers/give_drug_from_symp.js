const drugs = require('../medicines/drugs.json');

function give_drug_from_sym(input_array) {
    //console.log(input_symptom);   this is an array
    //return drugs[idx[0]];
    const len = drugs.drugs.length;
    const len_input_array = input_array.length;
    var result_array = [];
    for(var i = 0; i < len; i++) {
        const array = drugs.drugs[i].split(" ");
        const len_array = array.length;
        for(var j = 0; j < len_array; j++) {
            for(var k = 0; k < len_input_array; k++) {
                if(array[j] === input_array[k]) {
                    result_array.push(drugs.drugs[i]);
                }
            }
        }
    }
    return result_array;
}

module.exports = give_drug_from_sym;