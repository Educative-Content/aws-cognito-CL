import React from "react";
import AWS from "aws-sdk";

const AccessRes = () =>{
    // Configure Credentials to use Cognito
    AWS.config.region = 'us-east-1'; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "<Provide Identity Pool ID here>",
    });

    //get credentials to access AWS DynamoDDB
    AWS.config.credentials.get(async function(err){
        alert("we are inside it");
        if (err) {
            alert('Error retrieving credentials.');
            console.error(err);
            return;
        }

        AWS.config.update({region: 'us-east-1'});
        //create a dynamo db client
        var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
        alert("we got the table")
        const params = {
            TableName: "DynamoDBTable",
            Key: {
                'ItemID': {'N': '121'}
            },

        };
        
        //fetch items from DynamoDB
        var result = await dynamodb.getItem(params).promise()
        alert(JSON.stringify(result.Item))
    });

    return(
        <div>
            <h1>You have successfully logged in</h1>
        </div>
    );
}

export default AccessRes;
