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

    // Regex to validate ICAO: Must be exactly 4 alphanumeric characters
    const icaoRegex = /^[A-Z0-9]{4}$/;
    if (!icaoRegex.test(icao)) {
      return req.error(400, 'ICAO code must be a valid four-character alphanumeric code.');

    }
  }

  validateIATA(req) {
    if (req.data.iata) {
      req.data.iata = req.data.iata.toUpperCase();
      const { iata } = req.data;


      // Regex to validate IATA: Must be exactly 3 alphanumeric characters
      const iataRegex = /^[A-Z0-9]{3}$/;
      if (!iataRegex.test(iata)) {
        return req.error(400, 'IATA code must be a valid three-character alphanumeric code.');

      }
    }
  }

  validateCountryCode(req) {

    if (req.data.country) {
      req.data.country = req.data.country.toUpperCase();

      // Regex to validate country code: Must be exactly 2 uppercase letters
      const countryRegex = /^[A-Z]{2}$/;
      const { country } = req.data;

      if (!countryRegex.test(country)) {

        return req.error(400, 'Country code must be exactly 2 letters (ISO 3166-1 alpha-2 code).');
      }
    }
  }
};