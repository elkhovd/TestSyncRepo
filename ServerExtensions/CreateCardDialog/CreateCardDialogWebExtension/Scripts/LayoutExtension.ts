namespace WebClient {
    export class WebLayoutExtension extends BasicExtension {
        constructor() {
            super();
        }

        initialize() {
            super.initialize();

            cardTypeResolver.registerCardType({ id: "0DB13C90-21B6-49D8-9070-8144DF97552A", name: "ApprovalStage", cssClass: "approval-stage", caption: "CardType_CardApprovalStage_DisplayName" });
        }
    }

    extensionManager.registerExtension(new WebLayoutExtension());
}