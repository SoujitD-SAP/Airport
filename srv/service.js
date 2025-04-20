const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

    // Handle _key derivation before CREATE
    this.before('CREATE', Airports, req => this.addKey(req));

    // Handle ICAO before CREATE
    this.before('CREATE', Airports, req => this.validateICAO(req));

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

  validateICAO(req) {
    // Ensure ICAO code is capitalized
    if (req.data.icao) {
        req.data.icao = req.data.icao.toUpperCase();
    }

    // Validate that ICAO code is a four-letter code
    const { icao } = req.data;
    if (!icao || icao.length !== 4) {
        return req.error(400, 'ICAO code must be a four-letter code');
    }
  }

  validateCountryCode(req) {
    // Validate that country code is a two-letter ISO country code in uppercase
    const { country } = req.data;
    if (!country || country.length !== 2 || country !== country.toUpperCase()) {
      return req.error(400, 'Country code must be two-letter ISO country code');
    }
  }
};