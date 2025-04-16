using AirportService as service from '../../srv/service';
annotate service.Airports with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'icao',
                Value : icao,
            },
            {
                $Type : 'UI.DataField',
                Label : 'iata',
                Value : iata,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'city',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Label : 'state',
                Value : state,
            },
            {
                $Type : 'UI.DataField',
                Label : 'country',
                Value : country,
            },
            {
                $Type : 'UI.DataField',
                Label : 'elevation',
                Value : elevation,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lat',
                Value : lat,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lon',
                Value : lon,
            },
            {
                $Type : 'UI.DataField',
                Label : 'tz',
                Value : tz,
            },
            {
                $Type : 'UI.DataField',
                Label : 'region',
                Value : region,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'icao',
            Value : icao,
        },
        {
            $Type : 'UI.DataField',
            Label : 'iata',
            Value : iata,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'city',
            Value : city,
        },
        {
            $Type : 'UI.DataField',
            Label : 'state',
            Value : state,
        },
    ],
);

