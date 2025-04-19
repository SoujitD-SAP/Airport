const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

     // Handle _key derivation before CREATE
     this.before('CREATE', Airports, req => this.addKey(req));

    // Validate country code before CREATE/UPDATE
    this.before(['CREATE', 'UPDATE'], Airports, (req) => this.validateCountryCode(req));

    return super.init();
  }

  addKey(req) {
    if (!req.data.icao) {
      return req.error(400, 'ICAO code is required');
    }
    // Automatically set _key from icao
    req.data._key = req.data.icao;
    return req;
  }

  validateCountryCode(req) {
    // Validate that country code is a two-letter ISO country code in uppercase
    const { country } = req.data;
    if (!country || country.length !== 2 || country !== country.toUpperCase()) {
      return req.error(400, 'Country code must be two-letter ISO country code');
    }
}
}