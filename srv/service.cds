using {com.airports as my} from '../db/schema';

service AirportService {

    entity Airports as projection on my.Airports {
        *,
        concat(country, '-', state) as region : String
    } excluding {
        _key
    };

    // View for average elevation grouped by country
    entity AvgElevationByCountry as select from Airports {
        key country : String, 
        avg(elevation) as avgElevation : Decimal(7,2) 
    } group by country;

    // View for airports without IATA code
    entity AirportsWithoutIATA as select from Airports {
        key icao : String,
        name : String,
        city : String,
        state : String,
        country : String,
        elevation : Integer,
        lat : Decimal(13,10),
        lon : Decimal(13,10),
        tz : String
    } where iata is null;

    // View for the 10 most common timezones
    entity MostCommonTimezones as select from Airports {
        key tz : String, 
        count(*) as count : Integer 
    } group by tz order by count desc limit 10;


    annotate Airports with @odata.draft.enabled;

    
}
