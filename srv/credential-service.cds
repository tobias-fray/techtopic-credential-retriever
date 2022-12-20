using {
    cuid
} from '@sap/cds/common';

service credentialService {

    @Capabilities        : {
        InsertRestrictions.Insertable : true,
        UpdateRestrictions.Updatable  : true,
        DeleteRestrictions.Deletable  : false
    }
    @odata.draft.enabled : true
    entity CredentialInformation {
        virtual namespace           : String(35);
        virtual type                : String(35);
        virtual credentialName      : String(35);
}

}