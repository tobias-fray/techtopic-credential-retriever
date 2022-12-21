const cds = require('@sap/cds');
const { init } = require('passport/lib');
const {logCredentialInformation, logCredentialInformationWithoutOdata} = require('./credentialHandler/getCredential')

// module.exports = cds.service.impl(async srv => {

//     srv.on('CREATE', 'CredentialInformation', logCredentialInformation);

//         this.on('retrieve', logCredentialInformation)
    
//         await super.init();
// });

class credentialService extends cds.ApplicationService {
    async init() {
        this.on('retrieve', async (req) => {
            console.log("Hello")
        });
        await super.init();
    }
}
module.exports = {credentialService};