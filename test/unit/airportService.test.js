const cds = require('@sap/cds');
const { expect } = require('@jest/globals');
const AirportService = require(__dirname + '/../../srv/service.js'); // Import the service class

describe('AirportService Unit Tests', () => {
  let service;

  beforeAll(() => {
    // Initialize the service for testing
    service = new AirportService();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('addKey()', () => {
    it('should set _key from icao if icao is provided', () => {
      const req = { data: { icao: 'abcd' }, error: jest.fn() };
      service.addKey(req);
      expect(req.data._key).toBe('abcd');
      expect(req.error).not.toHaveBeenCalled();
    });

    it('should throw an error if icao is missing', () => {
      const req = { data: {}, error: jest.fn() };
      service.addKey(req);
      expect(req.error).toHaveBeenCalledWith(400, 'ICAO code is required');
    });
  });

  describe('validateICAO()', () => {
    it('should capitalize icao and validate its length', () => {
      const req = { data: { icao: 'abcd' }, error: jest.fn() };
      service.validateICAO(req);
      expect(req.data.icao).toBe('ABCD');
      expect(req.error).not.toHaveBeenCalled();
    });

    it('should throw an error if icao is not 4 characters', () => {
      const req = { data: { icao: 'abc' }, error: jest.fn() };
      service.validateICAO(req);
      expect(req.error).toHaveBeenCalledWith(400, 'ICAO code must be a valid four-character alphanumeric code.');
    });

    it('should throw an error if icao contains special characters', () => {
      const req = { data: { icao: 'a@bc' }, error: jest.fn() };
      service.validateICAO(req);
      expect(req.error).toHaveBeenCalledWith(400, 'ICAO code must be a valid four-character alphanumeric code.');
    });

    it('should throw an error if icao is missing', () => {
      const req = { data: {}, error: jest.fn() };
      service.validateICAO(req);
      expect(req.error).toHaveBeenCalledWith(400, 'ICAO code is required');
    });
  });

  describe('validateIATA()', () => {
    it('should capitalize iata and validate its length', () => {
      const req = { data: { iata: 'abc' }, error: jest.fn() };
      service.validateIATA(req);
      expect(req.data.iata).toBe('ABC');
      expect(req.error).not.toHaveBeenCalled();
    });

    it('should throw an error if iata is not 3 characters', () => {
      const req = { data: { iata: 'ab' }, error: jest.fn() };
      service.validateIATA(req);
      expect(req.error).toHaveBeenCalledWith(400, 'IATA code must be a valid three-character alphanumeric code.');
    });

    it('should throw an error if iata contains special characters', () => {
      const req = { data: { iata: 'a@b' }, error: jest.fn() };
      service.validateIATA(req);
      expect(req.error).toHaveBeenCalledWith(400, 'IATA code must be a valid three-character alphanumeric code.');
    });

    it('should not throw an error if iata is missing', () => {
      const req = { data: {}, error: jest.fn() };
      service.validateIATA(req);
      expect(req.error).not.toHaveBeenCalled();
    });
  });

  describe('validateCountryCode()', () => {
    it('should validate a valid two-letter country code', () => {
      const req = { data: { country: 'US' }, error: jest.fn() };
      service.validateCountryCode(req);
      expect(req.error).not.toHaveBeenCalled();
    });

    it('should throw an error if country code is not two letters', () => {
      const req = { data: { country: 'USA' }, error: jest.fn() };
      service.validateCountryCode(req);
      expect(req.error).toHaveBeenCalledWith(400, 'Country code must be exactly 2 letters (ISO 3166-1 alpha-2 code).');
    });

    it('should throw an error if country code contains special characters', () => {
      const req = { data: { country: 'U@' }, error: jest.fn() };
      service.validateCountryCode(req);
      expect(req.error).toHaveBeenCalledWith(400, 'Country code must be exactly 2 letters (ISO 3166-1 alpha-2 code).');
    });

    it('should not throw an error if country code is missing', () => {
      const req = { data: {}, error: jest.fn() };
      service.validateCountryCode(req);
      expect(req.error).not.toHaveBeenCalled();
    });
  });
});