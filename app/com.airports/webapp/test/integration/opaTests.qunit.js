sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/airports/test/integration/FirstJourney',
		'com/airports/test/integration/pages/AirportsList',
		'com/airports/test/integration/pages/AirportsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AirportsList, AirportsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/airports') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAirportsList: AirportsList,
					onTheAirportsObjectPage: AirportsObjectPage
                }
            },
            opaJourney.run
        );
    }
);