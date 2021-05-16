const fetch = require('node-fetch');
const fs = require('fs');

const url = "https://raw.githack.com/stopcoronatn/stopcoronatn.github.io/main/data/beds.csv"

async function download() {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(`./data/beds.csv`, buffer, () =>
        
           console.log('downloaded')
       
    )
}
download();