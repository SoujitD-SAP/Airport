namespace com.airports;

entity Airports {
    key icao: String(4);
    _key: String;
    iata: String(3);
    name: String @mandatory;
    city: String;
    state: String;
    country: String(2) @mandatory;
    elevation: Integer @mandatory;
    lat: Decimal(13, 10) @mandatory;
    lon: Decimal(13, 10) @mandatory;
    tz: String @mandatory;
}

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