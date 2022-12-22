using {
    cuid
} from '@sap/cds/common';

service credentialService {

    @cds.persistence.skip
    entity CredentialInformation {
        namespace           : String(35);
        type                : String(35);
        credentialName      : String(35);
        // credentialResult    : Association to CredentialResult;
}

    // entity CredentialResult {
    //     id: String(35);
    //     name: String(35);
    //     modifiedAt: String(35);
    //     value: String(35);
    //     status: String(35);
    //     username: String(35);
    //     type: String(35);
    // }

}