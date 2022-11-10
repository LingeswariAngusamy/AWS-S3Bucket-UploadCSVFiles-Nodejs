const s3Service = require("s3Service");
var FileSaver = require('file-saver');

async function getSingleS3File() {

    var fileStream = await s3Service.getSingleS3File('Personal/userdetails_lings.csv')
   
    if (fileStream) {
       
        var result = fileStream

        var byteArray = new Uint8Array(result.data);
        var blob = new Blob([byteArray]);

        FileSaver.saveAs(blob, 'userdetails_lings.csv');

    }
}
getSingleS3File()
