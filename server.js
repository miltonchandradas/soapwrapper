const express = require('express');
const soap = require('soap');
const fs = require('fs');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.raw({ type: function() { return true; }, limit: '5mb' }));

// Load the WSDL file
const xml = fs.readFileSync('service.wsdl', 'utf8');

// Define your service methods
const serviceObject = {
  Hello_Service: {
    Hello_Port: {
      getHello: async function(args) {
        let oDataURL = "http://localhost:4004/odata/v4/odata/getHello"
        let payload = {
          name: args.name.$value
        }
        const response = await axios.post(oDataURL, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return {
          message: response.data
        };
      }
    }
  }
};

// Create SOAP server and listen on a path
soap.listen(app, '/wsdl', serviceObject, xml);

// Initialize Express server on port 8000
app.listen(3000, function() {
    console.log('Server is up and running at http://localhost:3000');
});
