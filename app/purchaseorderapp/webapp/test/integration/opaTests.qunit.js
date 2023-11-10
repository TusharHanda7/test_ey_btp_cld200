sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tushar/app/purchaseorderapp/test/integration/FirstJourney',
		'tushar/app/purchaseorderapp/test/integration/pages/POsList',
		'tushar/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'tushar/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tushar/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);