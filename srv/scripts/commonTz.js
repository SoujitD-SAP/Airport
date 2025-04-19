const cds = require('@sap/cds');

async function commonTz() {
  try {
    const db = await cds.connect.to('db');
    
    // Query 3: Most common timezones
    const timezones = await db.run(
      SELECT
        .from('com_airports_Airports')
        .columns(
          'tz',
          { func: 'COUNT', args: [{ val: '*' }], as: 'airport_count' }
        )
        .where({ tz: { '!=': null } })
        .groupBy('tz')
        .orderBy({ ref: ['airport_count'], sort: 'desc' })
        .limit(10)
    );
    
    console.log('\nAirports Without IATA Code:\n');
    console.table(timezones);

  } catch (error) {
    console.error('Error while querying:', error);
  }
}

module.exports = commonTz();

