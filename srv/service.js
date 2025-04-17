const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

    // Handle _key derivation before CREATE
    this.before('CREATE', Airports, req => this.addKey(req));

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

}