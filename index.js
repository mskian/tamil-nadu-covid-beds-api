const csv = require('csvtojson')
const csvFilePath = './data/beds.csv';
const fs = require('fs');

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const cleanspace = JSON.parse(JSON.stringify(jsonObj).replace(/( +)(?=[(\w* *]*":)/g, "_"));
        const cleandots = JSON.parse(JSON.stringify(cleanspace).replace(/\./g, '_'));
        const cleannumber = JSON.parse(JSON.stringify(cleandots).replace(/\_0/g, ''));
        const tndata = JSON.parse(JSON.stringify(cleannumber).replace(/\-/g, "_"));
        fs.writeFile('./api.json', JSON.stringify(tndata, null, 4), () =>
            console.log('Done')
        )
    })