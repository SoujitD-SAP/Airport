using {com.airports as my} from '../db/schema';

service AirportService {

    entity Airports as projection on my.Airports {
        *,
        concat(country, '-', state) as region : String
    } excluding {
        _key
    };

    // Exposing the views in service
    entity AvgElevationByCountry as projection on my.AvgElevationByCountry;
    entity AirportsWithoutIATA as projection on my.AirportsWithoutIATA;
    entity MostCommonTimezones as projection on my.MostCommonTimezones;

    annotate Airports with @odata.draft.enabled;
}
