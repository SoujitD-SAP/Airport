const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

    // Handle ICAO validation and key derivation before CREATE
    this.before('CREATE', [Airports.drafts, Airports], req => {
      this.addKey(req);
      this.validateICAO(req);
    });

     // Handle Country code and IATA validation before CREATE and UPDATE
     this.before(['CREATE', 'UPDATE'], [Airports.drafts, Airports], req => {
      this.validateCountryCode(req);
      this.validateIATA(req);
    });

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
    if (!req.data.icao) {
      return req.error(400, 'ICAO code is required');
    }
    
    req.data.icao = req.data.icao.toUpperCase();
    const { icao } = req.data;
    
    if (icao.length !== 4) {
      return req.error(400, 'ICAO code must be a four-letter code');
    }
  }

  validateIATA(req) {
    if (req.data.iata) {
      req.data.iata = req.data.iata.toUpperCase();
      const { iata } = req.data;
      
      if (iata.length !== 3) {
        return req.error(400, 'IATA code must be a three-letter code');
      }
    }
  }

  validateCountryCode(req) {
    // Ensure country code is capitalized
    if (req.data.country) {
      req.data.country = req.data.country.toUpperCase();

      // Validate that country code is a two-letter ISO country code in uppercase
      const { country } = req.data;
      if (country.length !== 2 || !/^[A-Z]{2}$/.test(country)) {
        return req.error(400, 'Country code must be exactly 2 letters (ISO 3166-1 alpha-2 code).');
      }
    }
  }
};