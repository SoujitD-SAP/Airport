namespace com.airports;
 
 entity Airports {
    key icao: String;
        _key: String ;
        iata: String;
        name: String;
        city: String;
        state: String;
        country: String(2);
        elevation: Integer;
        lat: Decimal(13, 10);
        lon: Decimal(13, 10);
        tz: String;

  }