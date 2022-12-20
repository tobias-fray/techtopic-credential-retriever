const cds = require('@sap/cds')
const {logCredentialInformation, logCredentialInformationWithoutOdata} = require('./credentialHandler/getCredential')

module.exports = cds.service.impl(async srv => {

    srv.on('CREATE', 'CredentialInformation', logCredentialInformation);

});