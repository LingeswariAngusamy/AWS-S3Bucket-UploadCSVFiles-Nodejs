const s3Service = require("s3bucket/s3Service");
const csvjson = require('csvjson');

async function UploadCsv() {

    try {
        let response = [{
            name: "Lingeswari",
            age: "12",
            country: "India",
            Phone: "999999999999"
        }]
        
        const csvData = csvjson.toCSV(response, { headers: 'key' });
        await s3Service.uploadFiles('Personal/userdetails_lings.csv', csvData);
    } catch (ex) {
        console.error(ex);
    }
}
UploadCsv();