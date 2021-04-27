var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

AWS.config.apiVersions = {
  dynamodb: '2012-08-10',
  // other service API versions
};
var translate = new AWS.Translate();


const translate = (srcLanguage,trgLanguage,text) =>{
    const params = {
        SourceLanguageCode: srcLanguage,
        TargetLanguageCode: trgLanguage,
        Text: text,
    };
      
      translate.translateText(params, function(err, data) {
        if (err) throw new Error(err.stack); // an error occurred
        else return data;          // successful response
      });
      
} 

module.exports=translate;