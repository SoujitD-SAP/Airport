const cds = require('@sap/cds');

async function nullIATA() {
  try {
    const db = await cds.connect.to('db');
    
    // Query 2: Airports without IATA code
    const airportsWithoutIATA = await db.run(
        SELECT
        .from('com_airports_Airports')
        .columns([
          'icao',
          'name',
          'city',
          'state',
          'country',
          'elevation',
          'lat',
          'lon'
        ])
        .where({ iata : null })
    );
    
    console.log('\nAirports without IATA:\n');
    console.table(airportsWithoutIATA);

  } catch (error) {
    console.error('Error while querying:', error);
  }
}

module.exports = nullIATA();

