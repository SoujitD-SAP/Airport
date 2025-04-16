using {com.airports as my } from '../db/schema';

service AirportService {
  entity Airports as projection on my.Airports {
    *, 
    virtual null as region
  }
}