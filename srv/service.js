const cds = require('@sap/cds');

module.exports = class AirportService extends cds.ApplicationService {
  init() {
    const { Airports } = this.entities;

    this.after('READ', Airports, (req) => this.addregion(req));

    return super.init();
  }

  addregion(req) {
    if (Array.isArray(req)) {
      req.forEach(r => {
        r.region = r.country && r.state ? `${r.country}-${r.state}` : null;
      });
    } else {
      req.region = req.country && req.state ? `${req.country}-${req.state}` : null;
    }

  }
}
