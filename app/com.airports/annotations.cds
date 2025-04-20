using AirportService as service from '../../srv/service';



annotate service.Airports with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ICAO',
                Value : icao,
            },
            {
                $Type : 'UI.DataField',
                Label : 'IATA',
                Value : iata,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'City',
                Value : city,
            },
            {
                $Type : 'UI.DataField',
                Label : 'State',
                Value : state,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Country (2-letter ISO Code)',
                Value : country,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Elevation(ft)',
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
                Label : 'Region',
                Value : region,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Airport Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ICAO',
            Value : icao,
            Criticality : {$edmJson: {$If: [
        {$Gt: [
            {$Path: 'elevation'},
            8000
        ]},
        3,
        0

    ]}},
        },
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'City',
            Value : city,
        },
        {
            $Type : 'UI.DataField',
            Label : 'State',
            Value : state,
        },
         {
            $Type : 'UI.DataField',
            Label : 'Elevation(ft)',
            Value : elevation,
            
        },
        {
            $Type : 'UI.DataField',
            Value : region,
            Label : 'Region',
        },
        {
            $Type : 'UI.DataField',
            Value : country,
            Label : 'Country',
        },
        {
            $Type : 'UI.DataField',
            Value : iata,
            Label : 'IATA',
        },
        {
            $Type : 'UI.DataField',
            Value : lat,
            Label : 'lat',
        },
        {
            $Type : 'UI.DataField',
            Value : lon,
            Label : 'lon',
        },
        {
            $Type : 'UI.DataField',
            Value : tz,
            Label : 'tz',
        },
    ],
    UI.SelectionFields : [
        name,
        elevation,
    ],
    UI.HeaderInfo : {
        ImageUrl : city,
        TypeName : 'Airport',
        TypeNamePlural : 'Airports',
        TypeImageUrl : 'sap-icon://flight',
    },
);



annotate service.Airports with {
    name @Common.Label : 'Name'
};

annotate service.Airports with {
    elevation @Common.Label : 'Elevation'
};

annotate service.Airports with {
    icao @Common.FieldControl : #Mandatory
};

