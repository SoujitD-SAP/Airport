 namespace com.airports;
 
 entity Airports {
    key icao: String;
        _key: String ;
        iata: String;
        name: String;
        city: String;
        state: String;
        country: String;
        elevation: Integer;
        lat: Decimal(10, 6);
        lon: Decimal(10, 6);
        tz: String;

  }