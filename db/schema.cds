namespace com.airports;
 
 entity Airports {
    
    key icao: String(4);
        _key: String ;
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