const s3Service = require("s3bucket/s3Service");

async function getListOfS3file() {

    let filepath= 'Personal'
    let getFiles = await s3Service.getListOfS3file(filepath);
    if (getFiles) {
        console.log(getFiles)
    }
}
getListOfS3file()