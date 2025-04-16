const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

    // Handle _key derivation before CREATE
    this.before('CREATE', Airports, req => this.addKey(req));

    // Handle add region to airport data after READ
    this.after('READ', Airports, data => this.addRegion(data));

    return super.init();
  }


addKey(req) {
  if (!req.data.icao) {
    return req.error(400, 'ICAO code is required');
  }
  // Automatically set _key from icao
  req.data._key = req.data.icao;
  return req;
};

  /**
   * Add region to airport data
   */
  addRegion(req) {
    if (Array.isArray(req)) {
      req.forEach(r => {
        r.region = this.calculateRegion(r);
      });
    } else {
      req.region = this.calculateRegion(req);
    }
    return req;
  }

  /**
   * Calculate region from country and state
   */
  calculateRegion(airport) {
    return airport?.country && airport?.state ? 
      `${airport.country}-${airport.state}` : null;
  }
}