sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("credentialretrieverapp.controller.Home", {
            onInit: function () {

            },

            onPressSend: function(oEvent) {
                // var oLayoutModel = {
                //     namespace: '',
                //     type: '',
                //     credentialName: ''
                // }  
                // var oModel = new JSONModel();
                // oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                // oModel.setData(oLayoutModel);
                // sap.ui.getCore().setModel(oModel);
                // oView.setModel(oModel);

                var oModel = this.getView().getModel();

                var oCredentialInformation = {
                    namespace: this.getView().byId("namespaceInput").getValue(),
                    type: this.getView().byId("typeInput").getValue(),
                    credentialName: this.getView().byId("credentialInput").getValue()
                }
                // console.log(oCredentialInformation)
                // oModel.metadataLoaded().then(function () {    
                    
                oModel.create(
                    "/CredentialInformation",
                    oCredentialInformation,
                    {
                        success: function(oCredentialInformation) {
                            console.log("Success");
                        }.bind(this),
                        error: function() {
                            console.log("Error");
                        }.bind(this)
                    });
            },
        });
    });
