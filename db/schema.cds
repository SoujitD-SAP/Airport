namespace com.airports;
 
 entity Airports {
    key icao: String;
        _key: String ;
        iata: String;
        name: String @mandatory;
        city: String;
        state: String;
        country: String(2) @mandatory;
        elevation: Integer @mandatory;
        lat: Decimal(13, 10) @mandatory;
        lon: Decimal(13, 10) @mandatory;
        tz: String @mandatory;

  }