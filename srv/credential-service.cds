using {
    cuid
} from '@sap/cds/common';

service credentialService {

//     @Capabilities        : {
//         InsertRestrictions.Insertable : true,
//         UpdateRestrictions.Updatable  : true,
//         DeleteRestrictions.Deletable  : false
//     }
//     @odata.draft.enabled : true
//     @cds.persistence.skip
    entity CredentialBasis {
        namespace           : String(35);
        type                : String(35);
        credentialName      : String(35);
}

    entity CredentialInformation as projection on CredentialBasis actions {
        action retrieve(namespace : String, type: String, credentialName: String);
    }

}