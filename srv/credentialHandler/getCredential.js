const {readCredential} =  require('./credentialStore')

const logCredentialInformation = async function (req) {
    const CredentialInfo = req;
    namespace = CredentialInfo.namespace;
    type = CredentialInfo.type;
    cName = CredentialInfo.name;
    const credential = await readCredential(namespace, type, cName);
    //credentials are now usable
    console.log(credential);
    return credential;
}

const logCredentialInformationWithoutOdata = async function (namespace, type, cName) {
    const credential = await readCredential(namespace, type, cName);
}

module.exports = {
    logCredentialInformation, logCredentialInformationWithoutOdata
}