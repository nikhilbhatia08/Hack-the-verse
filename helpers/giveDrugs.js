//import getDrug from '../medicines/drugs.json' assert {type: json};
const getDrug = require('../medicines/drugs.json');

function getDrugs(input_string) {
    console.log(input_string);
    const len = getDrug.drugs.length;
    console.log(len)
    for(var i = 0; i < len; i++) {
        const array = getDrug.drugs[i].split(" ");
        //console.log(array);
        const len_array = array.length;
        for(var j = 0; j < len_array; j++) {
            if(array[j] === input_string) {
                return [array[j]];
            }
        }
    }
    return [];
}

module.exports = getDrugs;