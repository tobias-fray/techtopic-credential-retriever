const {readCredential} =  require('./credentialStore')

const logCredentialInformation = async function (req) {
    console.log("Test")
    credentialInfo = req;
    namespace = CredentialInfo.namespace;
    type = CredentialInfo.type;
    cName = CredentialInfo.name;
    const credential = await readCredential(namespace, type, cName);
    console.log(credential);
}

const logCredentialInformationWithoutOdata = async function (namespace, type, cName) {
    const credential = await readCredential(namespace, type, cName);
    console.log(credential);
}

module.exports = {
    logCredentialInformation, logCredentialInformationWithoutOdata
}