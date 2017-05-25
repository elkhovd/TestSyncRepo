/* Document view event handlers */
function sampleDocumentViewCardOpened(sender, e) {
    outgoingDocumentViewCardOpened(sender, e);
    sampleDocument_loadPartnersInfo();
}
// Load partner departments email and phone
function sampleDocument_loadPartnersInfo() {
    var controls = layoutManager.cardLayout.controls;
    var samplePartnersDepartmentControls = controls.samplePartnersDepartment;
    if (!controls.sampleDepartmentEmail || !controls.sampleDepartmentPhone || !controls.samplePartnersDepartment || samplePartnersDepartmentControls.length === 0)
        return;
    // Get id from every partnersDepartment control in the table
    var departmentIds = samplePartnersDepartmentControls
        .filter(function (control) { return control.hasValue(); })
        .map(function (control) { return control.params.value.id; });
    // Load email and phone for rows, where departments selected
    if (departmentIds.length > 0) {
        WebClient.samplePartnersController.GetPartnersInfo(departmentIds).done(function (infoList) {
            // Fill departmentMail and departmentPhone in every row of the table with received data
            departmentIds.forEach(function (departmentId, idIndex) {
                var partnersControls = controls.samplePartnersDepartment && samplePartnersDepartmentControls.filter(function (control) { return control.hasValue() && control.params.value.id === departmentId; });
                if (partnersControls) {
                    partnersControls.forEach(function (partnersControl) {
                        var rowIndex = samplePartnersDepartmentControls.indexOf(partnersControl);
                        controls.sampleDepartmentEmail[rowIndex].params.text = infoList[idIndex].email;
                        controls.sampleDepartmentPhone[rowIndex].params.text = infoList[idIndex].phone;
                    });
                }
            });
        });
    }
    // Reset email and phone for rows, that has no department selected
    samplePartnersDepartmentControls.forEach(function (partnersControl, rowIndex) {
        if (!partnersControl.hasValue()) {
            controls.sampleDepartmentEmail[rowIndex].params.text = '';
            controls.sampleDepartmentPhone[rowIndex].params.text = '';
        }
    });
}
