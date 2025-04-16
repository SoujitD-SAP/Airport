sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.airports',
            componentId: 'AirportsObjectPage',
            contextPath: '/Airports'
        },
        CustomPageDefinitions
    );
});