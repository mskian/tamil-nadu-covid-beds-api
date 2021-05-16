const fetch = require('node-fetch');
const fs = require('fs');

const url = "https://raw.githubusercontent.com/mskian/tamil-nadu-covid-beds-api/main/data/beds.csv"

async function download() {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(`./data/beds.csv`, buffer, () =>
        
           console.log('downloaded')
       
    )
}
download();