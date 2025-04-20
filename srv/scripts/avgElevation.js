const cds = require('@sap/cds');

async function avgElevation() {
    try {
        const db = await cds.connect.to('db');
        // Query 1: Average elevation by country
        const avgElevation = await db.run(
        SELECT.from('com_airports_Airports')
            .columns(
            'country',
            { func: 'AVG', args: [{ ref: ['elevation'] }], as: 'average_elevation' }
            )
            .where({ elevation: { '!=': null } })
            .groupBy('country')
            .orderBy({ ref: ['average_elevation'], sort: 'desc' })
        );

        console.log('\nAverage Elevation(ft) by Country:\n');
        console.table(avgElevation);
    
    } catch (error) {
        console.error('Error while querying:', error);
    } 
}
module.exports=avgElevation();

