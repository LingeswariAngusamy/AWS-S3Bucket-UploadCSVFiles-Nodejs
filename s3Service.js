const AWS = require('aws-sdk');
const S3_ACCESS_KEY_ID="****************"
const S3_SECRET_ACCESS_KEY="*************"
const S3_BUCKET_NAME="S3Bucket_Example_FileUpload"
const S3_REGION="us-west-1"

module.exports = {
   
    createS3Connection:()=> {
        var s3 = new AWS.S3({
            accessKeyId: S3_ACCESS_KEY_ID,
            secretAccessKey: S3_SECRET_ACCESS_KEY,
            region: String(S3_REGION)
        });
        
        return s3;
    },
 
    getListOfS3file:(prefix)=>{
        try {
           
         
            const params = {
                Bucket: String(S3_BUCKET_NAME),
                Delimiter: '/',
                Prefix: String(prefix)+'/',
            };
           
             return module.exports.createS3Connection().listObjects(params)
                .promise()
                .then(data => {
                    
                    return data.Contents;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {

        }
    },
    uploadFiles:(filePath, file)=> {
      
       

        const params = {
            Bucket: String(S3_BUCKET_NAME),
            Key: filePath,
            Body: file,
            region: String(S3_REGION),
        };
        return module.exports.createS3Connection().upload(params)
            .promise()
            .then(data => {
                let successData = Object.assign({},data);
                
               console.log(successData);
            })
            .catch((err) => {
                return err;
            });
    },
    getSingleS3File:(filePath)=> {
        try {
            const params = {
                Bucket: String(S3_BUCKET_NAME),
                Key: filePath
            };
           
           
            return module.exports.createS3Connection().getObject(params)
            .promise()
            .then(data => {
             
                if (data.Body) {
                    return data.Body;
                }
                return "";
            })
            .catch((err) => {
                return err;
            });
            
          
        } catch (error) {
            
        }
    }
}
