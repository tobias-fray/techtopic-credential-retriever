const cds = require('@sap/cds')
const {logCredentialInformation, logCredentialInformationWithoutOdata} = require('./credentialHandler/getCredential')

module.exports = cds.service.impl(async srv => {
  
    console.log("Service name: " + srv.name + " is serverd at " + srv.path);
    srv.on('CREATE', 'CredentialInformation', logCredentialInformation);

});