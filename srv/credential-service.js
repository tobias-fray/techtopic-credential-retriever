const cds = require('@sap/cds')
const {logCredentialInformation, logCredentialInformationWithoutOdata} = require('./credentialHandler/getCredential')

module.exports = cds.service.impl(async srv => {

    // srv.on("getTest", async (req) => {
    //     const nameSpace = 'socialMedia';
    //     const type = 'password';
    //     const cName = 'instagram';
    //     const logCredentialInformationWithoutOdata = await logCredentialInformationWithoutOdata(nameSpace, type, cName);
    //     console.log(logCredentialInformationWithoutOdata);
    // })

    srv.on('CREATE', 'CredentialInformation', logCredentialInformation);

});