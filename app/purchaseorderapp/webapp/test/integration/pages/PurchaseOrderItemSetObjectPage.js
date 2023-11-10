sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'tushar.app.purchaseorderapp',
            componentId: 'PurchaseOrderItemSetObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});