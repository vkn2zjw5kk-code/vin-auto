/* ============================================================
   AMEL SERVIS
   DATABASE.JS
   Velika lokalna baza vozila + OBD/DTC kodova

   VAŽNO:
   - OBD kod nije konačna dijagnoza.
   - P1xxx kodovi mogu biti proizvođački specifični.
   - Za profesionalnu upotrebu provjeriti fabričku dokumentaciju.
============================================================ */


/* ============================================================
   1. MARKA -> MODEL -> MOTOR
============================================================ */

const vehicleDatabase = {

    "Volkswagen": {

        "Golf 3": [
            "1.4",
            "1.6",
            "1.8",
            "1.9 D",
            "1.9 TD",
            "2.0 GTI"
        ],

        "Golf 4": [
            "1.4 16V",
            "1.6",
            "1.6 16V",
            "1.8",
            "1.8T",
            "1.9 SDI",
            "1.9 TDI 66 kW",
            "1.9 TDI 74 kW",
            "1.9 TDI 81 kW",
            "1.9 TDI 96 kW",
            "2.0",
            "2.0 16V",
            "2.3 V5",
            "2.8 V6"
        ],

        "Golf 5": [
            "1.4",
            "1.4 TSI",
            "1.6",
            "1.6 FSI",
            "1.9 TDI",
            "2.0 SDI",
            "2.0 TDI",
            "2.0 FSI",
            "2.0 TFSI",
            "3.2 R32"
        ],

        "Golf 6": [
            "1.2 TSI",
            "1.4",
            "1.4 TSI",
            "1.6 TDI",
            "2.0 TDI",
            "2.0 TSI"
        ],

        "Golf 7": [
            "1.0 TSI",
            "1.2 TSI",
            "1.4 TSI",
            "1.5 TSI",
            "1.6 TDI",
            "2.0 TDI",
            "2.0 TSI",
            "GTI",
            "R"
        ],

        "Polo": [
            "1.0",
            "1.2",
            "1.4",
            "1.4 TDI",
            "1.6 TDI",
            "1.9 SDI",
            "1.9 TDI"
        ],

        "Passat B5": [
            "1.6",
            "1.8",
            "1.8T",
            "1.9 TDI",
            "2.0",
            "2.3 V5",
            "2.5 TDI",
            "2.8 V6"
        ],

        "Passat B6": [
            "1.6 FSI",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 FSI",
            "2.0 TFSI",
            "2.7 TDI",
            "3.0 TDI"
        ],

        "Touran": [
            "1.6 FSI",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 FSI"
        ],

        "Tiguan": [
            "1.4 TSI",
            "2.0 TDI",
            "2.0 TSI"
        ]

    },


    "Audi": {

        "A3": [
            "1.6",
            "1.6 FSI",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 TFSI",
            "3.2"
        ],

        "A4": [
            "1.6",
            "1.8",
            "1.8T",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 TFSI",
            "2.5 TDI",
            "3.0 TDI"
        ],

        "A6": [
            "1.9 TDI",
            "2.0 TDI",
            "2.5 TDI",
            "2.7 TDI",
            "3.0 TDI",
            "4.2"
        ],

        "A8": [
            "2.5 TDI",
            "3.0 TDI",
            "4.2",
            "6.0"
        ],

        "Q5": [
            "2.0 TDI",
            "2.0 TFSI",
            "3.0 TDI"
        ],

        "Q7": [
            "3.0 TDI",
            "4.2 TDI",
            "4.2 FSI"
        ]

    },


    "BMW": {

        "1 Series": [
            "116i",
            "118i",
            "120i",
            "116d",
            "118d",
            "120d",
            "123d"
        ],

        "3 Series": [
            "316i",
            "318i",
            "320i",
            "320d",
            "323i",
            "325i",
            "325d",
            "330i",
            "330d",
            "335i",
            "335d"
        ],

        "5 Series": [
            "520i",
            "520d",
            "523i",
            "525i",
            "525d",
            "530i",
            "530d",
            "535d",
            "540i"
        ],

        "7 Series": [
            "730d",
            "735i",
            "740i",
            "745i",
            "750i"
        ],

        "X3": [
            "2.0d",
            "2.0i",
            "3.0d",
            "3.0i"
        ],

        "X5": [
            "3.0d",
            "3.0i",
            "4.4i",
            "4.8i"
        ]

    },


    "Mercedes-Benz": {

        "A-Class": [
            "A150",
            "A160",
            "A170 CDI",
            "A180 CDI",
            "A200",
            "A200 CDI"
        ],

        "C-Class": [
            "C180",
            "C200",
            "C200 CDI",
            "C220 CDI",
            "C230",
            "C250",
            "C270 CDI",
            "C280",
            "C300",
            "C320 CDI"
        ],

        "E-Class": [
            "E200",
            "E220 CDI",
            "E240",
            "E250 CDI",
            "E270 CDI",
            "E280",
            "E300",
            "E320 CDI",
            "E350",
            "E400"
        ],

        "S-Class": [
            "S320 CDI",
            "S350",
            "S400",
            "S500",
            "S600"
        ],

        "Sprinter": [
            "208 CDI",
            "211 CDI",
            "213 CDI",
            "216 CDI",
            "311 CDI",
            "313 CDI",
            "316 CDI",
            "319 CDI"
        ]

    },


    "Ford": {

        "Fiesta": [
            "1.25",
            "1.4",
            "1.4 TDCi",
            "1.5 TDCi",
            "1.6",
            "1.6 TDCi"
        ],

        "Focus": [
            "1.4",
            "1.6",
            "1.6 TDCi",
            "1.8",
            "1.8 TDCi",
            "2.0",
            "2.0 TDCi"
        ],

        "Mondeo": [
            "1.8",
            "1.8 TDCi",
            "2.0",
            "2.0 TDCi",
            "2.2 TDCi",
            "2.5"
        ],

        "Transit": [
            "2.0 DI",
            "2.2 TDCi",
            "2.4 TDCi",
            "2.5 DI"
        ],

        "Kuga": [
            "1.5 EcoBoost",
            "1.5 TDCi",
            "2.0 TDCi",
            "2.5"
        ]

    },


    "Opel": {

        "Corsa": [
            "1.0",
            "1.2",
            "1.4",
            "1.3 CDTI",
            "1.7 CDTI"
        ],

        "Astra": [
            "1.4",
            "1.6",
            "1.7 CDTI",
            "1.9 CDTI",
            "2.0 DTI",
            "2.0 Turbo"
        ],

        "Vectra": [
            "1.6",
            "1.8",
            "2.0 DTI",
            "2.2 DTI",
            "2.2",
            "3.0 CDTI"
        ],

        "Insignia": [
            "1.6",
            "1.8",
            "2.0 CDTI",
            "2.0 Turbo",
            "2.8 V6"
        ],

        "Zafira": [
            "1.6",
            "1.8",
            "1.9 CDTI",
            "2.0 DTI"
        ]

    },


    "Škoda": {

        "Fabia": [
            "1.2",
            "1.4",
            "1.4 TDI",
            "1.9 SDI",
            "1.9 TDI"
        ],

        "Octavia": [
            "1.4",
            "1.6",
            "1.6 MPI",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 FSI",
            "2.0 TFSI"
        ],

        "Superb": [
            "1.8T",
            "1.9 TDI",
            "2.0 TDI",
            "2.5 TDI",
            "2.8 V6"
        ],

        "Kodiaq": [
            "1.4 TSI",
            "1.5 TSI",
            "2.0 TDI",
            "2.0 TSI"
        ]

    },


    "SEAT": {

        "Ibiza": [
            "1.2",
            "1.4",
            "1.4 TDI",
            "1.9 TDI"
        ],

        "Leon": [
            "1.4",
            "1.6",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 TFSI"
        ],

        "Altea": [
            "1.6",
            "1.9 TDI",
            "2.0 TDI",
            "2.0 FSI"
        ]

    },


    "Peugeot": {

        "206": [
            "1.1",
            "1.4",
            "1.4 HDi",
            "1.6",
            "2.0 HDi"
        ],

        "207": [
            "1.4",
            "1.4 HDi",
            "1.6",
            "1.6 HDi"
        ],

        "307": [
            "1.4",
            "1.6",
            "1.6 HDi",
            "2.0 HDi"
        ],

        "308": [
            "1.4",
            "1.6 VTi",
            "1.6 HDi",
            "2.0 HDi"
        ],

        "407": [
            "1.8",
            "2.0",
            "2.0 HDi",
            "2.2",
            "2.7 HDi"
        ],

        "508": [
            "1.6 HDi",
            "1.6 THP",
            "2.0 HDi",
            "2.2 HDi"
        ]

    },


    "Citroën": {

        "C3": [
            "1.1",
            "1.4",
            "1.4 HDi",
            "1.6 HDi"
        ],

        "C4": [
            "1.4",
            "1.6",
            "1.6 HDi",
            "2.0 HDi"
        ],

        "C5": [
            "1.6 HDi",
            "2.0 HDi",
            "2.2 HDi",
            "2.7 HDi"
        ]

    },


    "Renault": {

        "Clio": [
            "1.2",
            "1.4",
            "1.5 dCi",
            "1.6",
            "1.9 dCi"
        ],

        "Megane": [
            "1.4",
            "1.6",
            "1.5 dCi",
            "1.9 dCi",
            "2.0"
        ],

        "Laguna": [
            "1.6",
            "1.8",
            "1.9 dCi",
            "2.0",
            "2.2 dCi",
            "3.0"
        ],

        "Scenic": [
            "1.4",
            "1.6",
            "1.5 dCi",
            "1.9 dCi",
            "2.0"
        ],

        "Master": [
            "2.2 dCi",
            "2.3 dCi",
            "2.5 dCi",
            "2.8 dTi"
        ]

    },


    "Dacia": {

        "Logan": [
            "1.4",
            "1.6",
            "1.5 dCi",
            "1.6 MPI"
        ],

        "Duster": [
            "1.5 dCi",
            "1.6",
            "1.3 TCe",
            "1.6 SCe"
        ],

        "Sandero": [
            "1.2",
            "1.4",
            "1.5 dCi",
            "1.6"
        ]

    },


    "Fiat": {

        "Punto": [
            "1.2",
            "1.4",
            "1.3 Multijet",
            "1.9 JTD"
        ],

        "Grande Punto": [
            "1.2",
            "1.4",
            "1.3 Multijet",
            "1.9 Multijet"
        ],

        "Bravo": [
            "1.4",
            "1.6 Multijet",
            "1.9 JTD",
            "2.0 Multijet"
        ],

        "Doblo": [
            "1.3 Multijet",
            "1.6 Multijet",
            "1.9 JTD"
        ]

    },


    "Toyota": {

        "Yaris": [
            "1.0",
            "1.3",
            "1.4 D-4D",
            "1.5"
        ],

        "Corolla": [
            "1.4",
            "1.6",
            "1.8",
            "2.0 D-4D"
        ],

        "Avensis": [
            "1.6",
            "1.8",
            "2.0 D-4D",
            "2.2 D-4D"
        ],

        "RAV4": [
            "2.0",
            "2.0 D-4D",
            "2.2 D-4D",
            "2.5 Hybrid"
        ]

    },


    "Honda": {

        "Civic": [
            "1.4",
            "1.5",
            "1.6",
            "1.7 CTDi",
            "1.8",
            "2.0"
        ],

        "Accord": [
            "1.8",
            "2.0",
            "2.2 i-CTDi",
            "2.4"
        ],

        "CR-V": [
            "2.0",
            "2.2 i-CTDi",
            "2.2 i-DTEC"
        ]

    },


    "Nissan": {

        "Micra": [
            "1.0",
            "1.2",
            "1.4",
            "1.5 dCi"
        ],

        "Qashqai": [
            "1.5 dCi",
            "1.6",
            "1.6 dCi",
            "2.0"
        ],

        "X-Trail": [
            "2.0",
            "2.0 dCi",
            "2.2 dCi",
            "2.5"
        ]

    },


    "Hyundai": {

        "i20": [
            "1.2",
            "1.4",
            "1.4 CRDi"
        ],

        "i30": [
            "1.4",
            "1.6",
            "1.6 CRDi",
            "2.0 CRDi"
        ],

        "Tucson": [
            "2.0",
            "2.0 CRDi",
            "2.7 V6"
        ]

    },


    "Kia": {

        "Ceed": [
            "1.4",
            "1.6",
            "1.6 CRDi",
            "2.0 CRDi"
        ],

        "Sportage": [
            "1.6",
            "2.0",
            "2.0 CRDi"
        ],

        "Sorento": [
            "2.0 CRDi",
            "2.2 CRDi",
            "2.5 CRDi"
        ]

    },


    "Mazda": {

        "Mazda 3": [
            "1.4",
            "1.6",
            "1.6 CD",
            "2.0"
        ],

        "Mazda 6": [
            "1.8",
            "2.0",
            "2.0 CD",
            "2.2 CD",
            "2.5"
        ],

        "CX-5": [
            "2.0",
            "2.2 Skyactiv-D",
            "2.5"
        ]

    },


    "Volvo": {

        "S40": [
            "1.6",
            "1.8",
            "2.0",
            "1.6 D",
            "2.0 D"
        ],

        "V50": [
            "1.6D",
            "2.0D",
            "2.4"
        ],

        "V70": [
            "2.0D",
            "2.4D",
            "2.5T",
            "3.0"
        ],

        "XC90": [
            "2.4 D5",
            "2.5T",
            "3.2",
            "4.4 V8"
        ]

    }

};


/* ============================================================
   2. OBD/DTC BAZA
============================================================ */

const dtcDatabase = {};


/* POMOĆNA FUNKCIJA */

function addDtc(code, title, system, severity, causes, check, symptoms = [], manufacturers = {}) {

    dtcDatabase[code] = {
        title,
        system,
        severity,
        causes,
        check,
        symptoms,
        manufacturers
    };

}


/* ============================================================
   P0000 - P0099
============================================================ */

addDtc(
    "P0001",
    "Regulator količine goriva – otvoren krug",
    "Gorivo",
    "medium",
    [
        "Prekid instalacije",
        "Loš konektor",
        "Regulator goriva",
        "ECU upravljanje"
    ],
    [
        "Pregledati instalaciju",
        "Provjeriti konektor",
        "Provjeriti napajanje",
        "Izmjeriti regulator prema specifikaciji"
    ]
);

addDtc(
    "P0002",
    "Regulator količine goriva – range/performance",
    "Gorivo",
    "medium",
    [
        "Regulator goriva",
        "Problem pritiska goriva",
        "Instalacija",
        "ECU upravljanje"
    ],
    [
        "Izmjeriti pritisak goriva",
        "Provjeriti regulator",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0003",
    "Regulator količine goriva – nizak signal",
    "Gorivo",
    "medium",
    [
        "Regulator",
        "Kratki spoj",
        "Instalacija"
    ],
    [
        "Provjeriti napon",
        "Provjeriti signal",
        "Provjeriti konektor"
    ]
);

addDtc(
    "P0004",
    "Regulator količine goriva – visok signal",
    "Gorivo",
    "medium",
    [
        "Regulator",
        "Instalacija",
        "Kratki spoj"
    ],
    [
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Provjeriti regulator"
    ]
);

addDtc(
    "P0010",
    "A aktuator položaja bregaste – problem kruga",
    "Razvod / VVT",
    "medium",
    [
        "VVT solenoid",
        "Instalacija",
        "Konektor",
        "Problem sa uljem"
    ],
    [
        "Provjeriti nivo ulja",
        "Provjeriti VVT solenoid",
        "Provjeriti instalaciju",
        "Provjeriti fazu motora"
    ]
);

addDtc(
    "P0011",
    "Bregasta – položaj previše unaprijed",
    "Razvod",
    "high",
    [
        "VVT sistem",
        "Faza motora",
        "Senzor bregaste",
        "Problem sa uljem"
    ],
    [
        "Provjeriti ulje",
        "Provjeriti VVT",
        "Provjeriti fazu",
        "Uporediti zadani i stvarni položaj"
    ]
);

addDtc(
    "P0012",
    "Bregasta – položaj previše kasno",
    "Razvod",
    "high",
    [
        "VVT",
        "Faza",
        "Ulje",
        "Senzor"
    ],
    [
        "Provjeriti ulje",
        "Provjeriti VVT",
        "Provjeriti fazu"
    ]
);

addDtc(
    "P0016",
    "Neusklađenost radilice i bregaste",
    "Razvod",
    "high",
    [
        "Pogrešna faza",
        "CKP senzor",
        "CMP senzor",
        "Lanac/remenski pogon"
    ],
    [
        "Provjeriti oznake razvoda",
        "Provjeriti CKP",
        "Provjeriti CMP",
        "Provjeriti fazu motora"
    ]
);


/* ============================================================
   P0100 - P0199
============================================================ */

addDtc(
    "P0100",
    "MAF – problem električnog kruga",
    "Usis / MAF",
    "medium",
    [
        "MAF senzor",
        "Konektor",
        "Prekid instalacije",
        "Problem napajanja"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti masu",
        "Provjeriti signal",
        "Uporediti MAF vrijednosti"
    ]
);

addDtc(
    "P0101",
    "MAF – range/performance",
    "Usis",
    "medium",
    [
        "MAF",
        "Falš zrak",
        "Filter zraka",
        "Problem usisa"
    ],
    [
        "Provjeriti filter",
        "Pregledati usisna crijeva",
        "Provjeriti MAF vrijednosti",
        "Provjeriti curenje zraka"
    ]
);

addDtc(
    "P0102",
    "MAF – nizak signal",
    "Usis",
    "medium",
    [
        "MAF",
        "Napajanje",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti masu",
        "Provjeriti signal"
    ]
);

addDtc(
    "P0103",
    "MAF – visok signal",
    "Usis",
    "medium",
    [
        "MAF",
        "Instalacija",
        "Kratki spoj"
    ],
    [
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Provjeriti MAF"
    ]
);

addDtc(
    "P0105",
    "MAP/BARO senzor – problem kruga",
    "Usis / MAP",
    "medium",
    [
        "MAP senzor",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti masu",
        "Provjeriti signal",
        "Uporediti MAP sa stvarnim pritiskom"
    ]
);

addDtc(
    "P0106",
    "MAP/BARO – range/performance",
    "Usis",
    "medium",
    [
        "MAP senzor",
        "Curenje usisa",
        "Instalacija"
    ],
    [
        "Provjeriti MAP",
        "Provjeriti usis",
        "Provjeriti vakuum"
    ]
);

addDtc(
    "P0107",
    "MAP/BARO – nizak signal",
    "Usis",
    "medium",
    [
        "MAP",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti signal",
        "Provjeriti konektor"
    ]
);

addDtc(
    "P0108",
    "MAP/BARO – visok signal",
    "Usis",
    "medium",
    [
        "MAP",
        "Instalacija",
        "Kratki spoj"
    ],
    [
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Provjeriti MAP"
    ]
);

addDtc(
    "P0110",
    "IAT – problem kruga",
    "Usis",
    "medium",
    [
        "IAT senzor",
        "Konektor",
        "Instalacija"
    ],
    [
        "Provjeriti konektor",
        "Izmjeriti senzor",
        "Provjeriti temperaturu na dijagnostici"
    ]
);

addDtc(
    "P0111",
    "IAT – range/performance",
    "Usis",
    "medium",
    [
        "IAT",
        "Instalacija",
        "Neispravna vrijednost"
    ],
    [
        "Uporediti temperaturu sa stvarnom",
        "Provjeriti senzor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0112",
    "IAT – nizak signal",
    "Usis",
    "medium",
    [
        "IAT",
        "Kratki spoj",
        "Instalacija"
    ],
    [
        "Provjeriti signal",
        "Provjeriti konektor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0113",
    "IAT – visok signal",
    "Usis",
    "medium",
    [
        "IAT",
        "Prekid instalacije",
        "Konektor"
    ],
    [
        "Provjeriti instalaciju",
        "Provjeriti konektor",
        "Provjeriti senzor"
    ]
);

addDtc(
    "P0115",
    "ECT – problem kruga senzora temperature",
    "Hlađenje",
    "medium",
    [
        "ECT senzor",
        "Konektor",
        "Instalacija"
    ],
    [
        "Uporediti temperaturu ECU-a sa stvarnom",
        "Provjeriti senzor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0116",
    "ECT – range/performance",
    "Hlađenje",
    "medium",
    [
        "ECT",
        "Termostat",
        "Instalacija"
    ],
    [
        "Provjeriti temperaturu",
        "Provjeriti termostat",
        "Provjeriti ECT"
    ]
);

addDtc(
    "P0117",
    "ECT – nizak signal",
    "Hlađenje",
    "medium",
    [
        "ECT",
        "Kratki spoj",
        "Instalacija"
    ],
    [
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Provjeriti senzor"
    ]
);

addDtc(
    "P0118",
    "ECT – visok signal",
    "Hlađenje",
    "medium",
    [
        "ECT",
        "Prekid instalacije",
        "Konektor"
    ],
    [
        "Provjeriti konektor",
        "Provjeriti instalaciju",
        "Provjeriti senzor"
    ]
);

addDtc(
    "P0120",
    "TPS – problem kruga",
    "Leptir gasa",
    "medium",
    [
        "TPS",
        "Leptir gasa",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti TPS",
        "Provjeriti signal",
        "Provjeriti konektor"
    ]
);

addDtc(
    "P0121",
    "TPS – range/performance",
    "Leptir gasa",
    "medium",
    [
        "TPS",
        "Leptir gasa",
        "Instalacija"
    ],
    [
        "Provjeriti vrijednost TPS-a",
        "Provjeriti leptir",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0122",
    "TPS – nizak signal",
    "Leptir gasa",
    "medium",
    [
        "TPS",
        "Kratki spoj",
        "Instalacija"
    ],
    [
        "Provjeriti signal",
        "Provjeriti napajanje",
        "Provjeriti masu"
    ]
);

addDtc(
    "P0123",
    "TPS – visok signal",
    "Leptir gasa",
    "medium",
    [
        "TPS",
        "Kratki spoj na plus",
        "Instalacija"
    ],
    [
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Provjeriti TPS"
    ]
);

addDtc(
    "P0128",
    "Temperatura rashladne tečnosti ispod očekivane",
    "Hlađenje",
    "medium",
    [
        "Termostat",
        "ECT senzor",
        "Preniska radna temperatura"
    ],
    [
        "Provjeriti radnu temperaturu",
        "Provjeriti termostat",
        "Provjeriti ECT"
    ]
);


/* ============================================================
   P0200 - P0299
============================================================ */

addDtc(
    "P0200",
    "Injektori – problem električnog kruga",
    "Gorivo / Injektori",
    "high",
    [
        "Injektor",
        "Instalacija",
        "Konektor",
        "ECU upravljanje"
    ],
    [
        "Provjeriti konektor",
        "Provjeriti instalaciju",
        "Provjeriti otpor/napajanje prema specifikaciji",
        "Testirati injektor"
    ]
);

for(let cylinder = 1; cylinder <= 8; cylinder++){

    const code =
        "P02" +
        String(10 + cylinder - 1);

    addDtc(
        code,
        "Injektor cilindar " + cylinder + " – problem električnog kruga",
        "Gorivo / Injektor",
        "high",
        [
            "Injektor",
            "Konektor",
            "Instalacija",
            "ECU upravljanje"
        ],
        [
            "Provjeriti konektor",
            "Provjeriti instalaciju",
            "Provjeriti napajanje",
            "Testirati injektor"
        ]
    );

}


addDtc(
    "P0234",
    "Turbo – prevelik pritisak / overboost",
    "Turbo",
    "high",
    [
        "Vakuum",
        "Aktuator turbine",
        "Regulacija turbine",
        "Zapekla geometrija",
        "MAP senzor"
    ],
    [
        "Provjeriti vakuum",
        "Provjeriti aktuator",
        "Pregledati turbo crijeva",
        "Uporediti zadani i stvarni pritisak"
    ]
);

addDtc(
    "P0235",
    "Turbo boost senzor – problem kruga",
    "Turbo",
    "high",
    [
        "MAP/boost senzor",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti signal",
        "Provjeriti crijeva"
    ]
);

addDtc(
    "P0299",
    "Turbo – nedovoljan pritisak / underboost",
    "Turbo",
    "high",
    [
        "Curenje boosta",
        "Vakuum",
        "Aktuator",
        "Turbo",
        "Intercooler",
        "MAP senzor"
    ],
    [
        "Pregledati turbo crijeva",
        "Provjeriti intercooler",
        "Provjeriti vakuum",
        "Provjeriti aktuator",
        "Provjeriti MAP vrijednosti"
    ]
);


/* ============================================================
   P0300 - P0399
============================================================ */

addDtc(
    "P0300",
    "Nasumični / višestruki promašaji paljenja",
    "Paljenje",
    "high",
    [
        "Svjećice",
        "Bobine",
        "Injektori",
        "Gorivo",
        "Kompresija",
        "Vakum"
    ],
    [
        "Očitati misfire po cilindrima",
        "Provjeriti svjećice",
        "Provjeriti bobine",
        "Provjeriti gorivo",
        "Izmjeriti kompresiju ako je potrebno"
    ]
);

for(let cylinder = 1; cylinder <= 8; cylinder++){

    const code =
        "P030" + cylinder;

    addDtc(
        code,
        "Promašaj paljenja – cilindar " + cylinder,
        "Paljenje",
        "high",
        [
            "Svjećica",
            "Bobina",
            "Injektor",
            "Kompresija",
            "Problem goriva"
        ],
        [
            "Provjeriti svjećicu",
            "Provjeriti bobinu",
            "Provjeriti injektor",
            "Provjeriti kompresiju"
        ],
        [
            "Nemiran rad",
            "Gubitak snage",
            "Trešenje motora",
            "Moguće povećana potrošnja"
        ]
    );

}


addDtc(
    "P0320",
    "Signal senzora položaja radilice",
    "Senzori motora",
    "high",
    [
        "CKP senzor",
        "Konektor",
        "Instalacija",
        "Problem signala"
    ],
    [
        "Provjeriti signal pri verglanju",
        "Provjeriti napajanje",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0335",
    "Senzor položaja radilice – problem kruga",
    "Senzori",
    "high",
    [
        "CKP senzor",
        "Konektor",
        "Instalacija"
    ],
    [
        "Provjeriti napajanje",
        "Provjeriti signal",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0340",
    "Senzor položaja bregaste – problem kruga",
    "Senzori",
    "high",
    [
        "CMP senzor",
        "Instalacija",
        "Konektor",
        "Faza motora"
    ],
    [
        "Provjeriti senzor",
        "Provjeriti signal",
        "Provjeriti fazu motora"
    ]
);


/* ============================================================
   P0400 - P0499
============================================================ */

addDtc(
    "P0400",
    "EGR – problem protoka",
    "EGR",
    "medium",
    [
        "EGR ventil",
        "Vakum",
        "Naslage čađi",
        "Problem upravljanja"
    ],
    [
        "Provjeriti EGR",
        "Provjeriti vakuum",
        "Provjeriti usis",
        "Provjeriti aktivaciju EGR-a"
    ]
);

addDtc(
    "P0401",
    "EGR – nedovoljan protok",
    "EGR",
    "medium",
    [
        "Začepljen EGR",
        "Začepljen usis",
        "Vakum",
        "EGR ventil"
    ],
    [
        "Provjeriti EGR",
        "Pregledati usis",
        "Provjeriti vakuum"
    ]
);

addDtc(
    "P0402",
    "EGR – prevelik protok",
    "EGR",
    "medium",
    [
        "EGR ostao otvoren",
        "Problem upravljanja",
        "Vakum"
    ],
    [
        "Provjeriti EGR",
        "Provjeriti upravljanje",
        "Provjeriti vakuum"
    ]
);

addDtc(
    "P0410",
    "Sekundarni sistem zraka – problem",
    "Izduv",
    "medium",
    [
        "Pumpa sekundarnog zraka",
        "Ventil",
        "Crijevo",
        "Instalacija"
    ],
    [
        "Provjeriti pumpu",
        "Provjeriti ventil",
        "Provjeriti crijeva",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0420",
    "Efikasnost katalizatora ispod praga – Bank 1",
    "Izduv",
    "medium",
    [
        "Katalizator",
        "Lambda sonda",
        "Curenje izduva",
        "Problem smjese"
    ],
    [
        "Provjeriti curenje izduva",
        "Pregledati lambda podatke",
        "Provjeriti smjesu",
        "Tek nakon toga procjenjivati katalizator"
    ]
);

addDtc(
    "P0430",
    "Efikasnost katalizatora ispod praga – Bank 2",
    "Izduv",
    "medium",
    [
        "Katalizator",
        "Lambda",
        "Curenje izduva",
        "Problem smjese"
    ],
    [
        "Provjeriti izduv",
        "Provjeriti lambda podatke",
        "Provjeriti smjesu"
    ]
);

addDtc(
    "P0440",
    "EVAP sistem – problem",
    "EVAP",
    "medium",
    [
        "Curenje",
        "EVAP ventil",
        "Crijevo",
        "Čep rezervoara"
    ],
    [
        "Pregledati crijeva",
        "Provjeriti ventil",
        "Provjeriti sistem na curenje"
    ]
);

addDtc(
    "P0455",
    "EVAP – veliko curenje",
    "EVAP",
    "medium",
    [
        "Veliko curenje",
        "Čep rezervoara",
        "Crijevo",
        "Ventil"
    ],
    [
        "Provjeriti čep rezervoara",
        "Pregledati crijeva",
        "Izvršiti test curenja"
    ]
);


/* ============================================================
   P0500 - P0599
============================================================ */

addDtc(
    "P0500",
    "Senzor brzine vozila – problem",
    "ABS / Brzina vozila",
    "medium",
    [
        "VSS senzor",
        "ABS senzor",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti signal brzine",
        "Provjeriti senzor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0560",
    "Problem napajanja sistema",
    "Elektrika",
    "high",
    [
        "Akumulator",
        "Alternator",
        "Loša masa",
        "Instalacija"
    ],
    [
        "Izmjeriti napon",
        "Provjeriti punjenje",
        "Provjeriti mase",
        "Provjeriti kablove"
    ]
);

addDtc(
    "P0562",
    "Nizak napon sistema",
    "Napajanje",
    "high",
    [
        "Slab akumulator",
        "Alternator",
        "Loša masa",
        "Kablovi"
    ],
    [
        "Izmjeriti akumulator",
        "Provjeriti punjenje alternatora",
        "Provjeriti pad napona",
        "Provjeriti mase"
    ]
);

addDtc(
    "P0563",
    "Visok napon sistema",
    "Napajanje",
    "high",
    [
        "Alternator",
        "Regulator napona",
        "Problem instalacije"
    ],
    [
        "Izmjeriti napon punjenja",
        "Provjeriti regulator alternatora",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0571",
    "Prekidač kočnice – problem kruga",
    "Kočioni sistem",
    "high",
    [
        "Prekidač kočnice",
        "Stop svjetla",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti stop svjetla",
        "Provjeriti prekidač",
        "Provjeriti konektor",
        "Provjeriti instalaciju"
    ]
);


/* ============================================================
   P0600 - P0699
============================================================ */

addDtc(
    "P0600",
    "Komunikacija upravljačkog modula – problem",
    "ECU / Komunikacija",
    "high",
    [
        "CAN komunikacija",
        "ECU",
        "Napajanje",
        "Masa",
        "Instalacija"
    ],
    [
        "Provjeriti napajanje ECU-a",
        "Provjeriti mase",
        "Provjeriti CAN instalaciju",
        "Provjeriti komunikaciju modula"
    ]
);

addDtc(
    "P0601",
    "ECU memorija – checksum greška",
    "ECU",
    "high",
    [
        "ECU",
        "Napajanje",
        "Softver",
        "Interna memorija"
    ],
    [
        "Provjeriti napajanje ECU-a",
        "Provjeriti mase",
        "Provjeriti ostale kodove",
        "Za programiranje koristiti odgovarajuću proceduru"
    ]
);

addDtc(
    "P0620",
    "Generator/alternator – problem upravljanja",
    "Punjenje",
    "high",
    [
        "Alternator",
        "Regulator",
        "Instalacija",
        "Remen"
    ],
    [
        "Provjeriti remen alternatora",
        "Izmjeriti punjenje",
        "Provjeriti regulator",
        "Provjeriti instalaciju"
    ]
);


/* ============================================================
   P0700 - P0799
============================================================ */

addDtc(
    "P0700",
    "Transmission Control System – prijavljena greška",
    "Automatski mjenjač",
    "high",
    [
        "Greška TCM-a",
        "Senzor mjenjača",
        "Hidraulika",
        "Instalacija"
    ],
    [
        "Očitati greške direktno iz TCM-a",
        "Provjeriti nivo/stanje ulja",
        "Provjeriti instalaciju",
        "Ne donositi zaključak samo iz P0700"
    ]
);

addDtc(
    "P0715",
    "Senzor ulazne brzine mjenjača – problem",
    "Mjenjač",
    "high",
    [
        "Senzor",
        "Konektor",
        "Instalacija"
    ],
    [
        "Provjeriti signal",
        "Provjeriti konektor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0720",
    "Senzor izlazne brzine mjenjača – problem",
    "Mjenjač",
    "high",
    [
        "Senzor",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti signal",
        "Provjeriti senzor",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0730",
    "Neispravan omjer prijenosa",
    "Automatski mjenjač",
    "high",
    [
        "Nivo ulja",
        "Hidraulični problem",
        "Solenoidi",
        "Mehanički problem"
    ],
    [
        "Provjeriti nivo i stanje ulja",
        "Očitati TCM",
        "Provjeriti solenoide",
        "Izvršiti odgovarajuću testnu proceduru"
    ]
);


/* ============================================================
   P0800 - P0899
============================================================ */

addDtc(
    "P0841",
    "Senzor/prekidač pritiska mjenjača – range/performance",
    "Automatski mjenjač",
    "high",
    [
        "Senzor pritiska",
        "Ulje mjenjača",
        "Solenoid",
        "Instalacija"
    ],
    [
        "Provjeriti nivo ulja",
        "Provjeriti senzor",
        "Provjeriti konektor",
        "Provjeriti hidraulični pritisak prema proceduri"
    ]
);


/* ============================================================
   P1000 - P1999
============================================================ */

/*
   P1xxx nije univerzalan.
   Ovdje dodajemo samo poznate/proizvođački označene podatke.
*/


addDtc(
    "P1619",
    "Glow Plug Relay J52 – prekid ili kratki spoj na masu",
    "VAG – sistem predgrijavanja",
    "high",
    [
        "Prekid u instalaciji releja J52",
        "Kratki spoj na masu",
        "Neispravan relej grijača J52",
        "Loš konektor",
        "Problem napajanja releja"
    ],
    [
        "Provjeriti odgovarajući osigurač",
        "Provjeriti napajanje releja",
        "Provjeriti masu i instalaciju",
        "Pregledati konektor J52",
        "Provjeriti relej prema fabričkoj proceduri",
        "Nakon popravke obrisati grešku i ponovo očitati ECU"
    ],
    [
        "Teže hladno paljenje",
        "Problem sa predgrijavanjem",
        "Moguće treperenje lampice grijača"
    ],
    {
        "Volkswagen": "VAG – provjeriti konkretan ECU i fabričku dokumentaciju.",
        "Audi": "VAG – provjeriti konkretan ECU i fabričku dokumentaciju.",
        "SEAT": "VAG – provjeriti konkretan ECU i fabričku dokumentaciju.",
        "Škoda": "VAG – provjeriti konkretan ECU i fabričku dokumentaciju."
    }
);


addDtc(
    "P1618",
    "Glow Plug Relay J52 – kratki spoj na plus",
    "VAG – sistem predgrijavanja",
    "high",
    [
        "Kratki spoj na plus",
        "Oštećena instalacija",
        "Neispravan relej J52"
    ],
    [
        "Provjeriti instalaciju",
        "Provjeriti napajanje",
        "Provjeriti relej J52"
    ],
    [],
    {
        "Volkswagen": "VAG kod – potvrditi na konkretnom ECU-u.",
        "Audi": "VAG kod – potvrditi na konkretnom ECU-u.",
        "SEAT": "VAG kod – potvrditi na konkretnom ECU-u.",
        "Škoda": "VAG kod – potvrditi na konkretnom ECU-u."
    }
);


/* ============================================================
   SMJESA
============================================================ */

addDtc(
    "P0171",
    "Sistem previše siromašan – Bank 1",
    "Smjesa",
    "medium",
    [
        "Falš zrak",
        "MAF",
        "Nizak pritisak goriva",
        "Lambda",
        "Vakum curenje"
    ],
    [
        "Pregledati usis",
        "Provjeriti vakuum",
        "Izmjeriti pritisak goriva",
        "Provjeriti MAF",
        "Provjeriti fuel trim"
    ]
);

addDtc(
    "P0172",
    "Sistem previše bogat – Bank 1",
    "Smjesa",
    "medium",
    [
        "MAF",
        "Injektor",
        "Pritisak goriva",
        "Lambda"
    ],
    [
        "Provjeriti MAF",
        "Provjeriti injektore",
        "Izmjeriti pritisak goriva",
        "Provjeriti lambda podatke"
    ]
);

addDtc(
    "P0174",
    "Sistem previše siromašan – Bank 2",
    "Smjesa",
    "medium",
    [
        "Falš zrak",
        "MAF",
        "Gorivo",
        "Lambda"
    ],
    [
        "Provjeriti usis",
        "Provjeriti vakuum",
        "Provjeriti MAF",
        "Provjeriti gorivo"
    ]
);

addDtc(
    "P0175",
    "Sistem previše bogat – Bank 2",
    "Smjesa",
    "medium",
    [
        "MAF",
        "Injektor",
        "Pritisak goriva",
        "Lambda"
    ],
    [
        "Provjeriti MAF",
        "Provjeriti gorivo",
        "Provjeriti injektore",
        "Provjeriti lambda podatke"
    ]
);


/* ============================================================
   DPF
============================================================ */

addDtc(
    "P2002",
    "DPF – efikasnost ispod praga",
    "DPF",
    "high",
    [
        "Začepljen DPF",
        "Senzor diferencijalnog pritiska",
        "Neuspjela regeneracija",
        "Problem sa senzorima"
    ],
    [
        "Očitati diferencijalni pritisak",
        "Provjeriti senzore",
        "Provjeriti uslove regeneracije",
        "Ne pokretati regeneraciju bez prethodne provjere"
    ]
);

addDtc(
    "P2452",
    "DPF senzor diferencijalnog pritiska – problem",
    "DPF",
    "high",
    [
        "Senzor",
        "Začepljena crijeva senzora",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti oba crijeva senzora",
        "Provjeriti konektor",
        "Provjeriti napajanje",
        "Uporediti očitavanje senzora"
    ]
);


/* ============================================================
   EGR / DIESEL
============================================================ */

addDtc(
    "P0409",
    "EGR senzor – problem kruga",
    "EGR",
    "medium",
    [
        "EGR senzor",
        "EGR ventil",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti EGR",
        "Provjeriti signal senzora",
        "Provjeriti instalaciju"
    ]
);

addDtc(
    "P0470",
    "Senzor pritiska izduvnih gasova – problem",
    "Izduv / Turbo / DPF",
    "high",
    [
        "Senzor pritiska",
        "Crijevo senzora",
        "Instalacija",
        "Konektor"
    ],
    [
        "Provjeriti crijevo senzora",
        "Provjeriti signal",
        "Provjeriti instalaciju",
        "Uporediti vrijednost sa stvarnim stanjem"
    ]
);


/* ============================================================
   OBD / KOMUNIKACIJA
============================================================ */

addDtc(
    "U0001",
    "CAN komunikacija – problem",
    "CAN mreža",
    "high",
    [
        "CAN instalacija",
        "Loš konektor",
        "Napajanje modula",
        "Masa",
        "ECU/BCM/ABS modul"
    ],
    [
        "Provjeriti napajanje modula",
        "Provjeriti mase",
        "Pregledati CAN instalaciju",
        "Očitati sve module i njihove greške"
    ]
);

addDtc(
    "U0100",
    "Izgubljena komunikacija sa ECM/PCM",
    "CAN / ECU",
    "high",
    [
        "ECM/PCM napajanje",
        "CAN mreža",
        "Osigurač",
        "Masa",
        "Instalacija"
    ],
    [
        "Provjeriti osigurače",
        "Provjeriti napajanje ECU-a",
        "Provjeriti mase",
        "Provjeriti CAN komunikaciju"
    ]
);

addDtc(
    "U0121",
    "Izgubljena komunikacija sa ABS modulom",
    "CAN / ABS",
    "high",
    [
        "ABS modul",
        "CAN mreža",
        "Napajanje",
        "Masa",
        "Instalacija"
    ],
    [
        "Provjeriti ABS osigurače",
        "Provjeriti napajanje ABS modula",
        "Provjeriti CAN",
        "Očitati ABS direktno"
    ]
);


/* ============================================================
   B KODOVI – KAROSERIJA
============================================================ */

addDtc(
    "B0001",
    "Karoserijski sistem – generički B kod",
    "Karoserija",
    "medium",
    [
        "BCM",
        "Instalacija",
        "Konektor",
        "Senzor ili aktuator"
    ],
    [
        "Očitati BCM",
        "Provjeriti instalaciju",
        "Provjeriti napajanje",
        "Provjeriti proizvođački opis koda"
    ]
);


/* ============================================================
   C KODOVI – ŠASIJA
============================================================ */

addDtc(
    "C0035",
    "Senzor brzine točka – problem",
    "ABS / Šasija",
    "high",
    [
        "ABS senzor",
        "Kabl senzora",
        "Ležaj sa magnetnim prstenom",
        "Konektor"
    ],
    [
        "Vizuelno pregledati senzor",
        "Provjeriti kabl",
        "Provjeriti signal senzora",
        "Provjeriti ležaj/prsten"
    ]
);

addDtc(
    "C0040",
    "Senzor brzine točka – problem",
    "ABS / Šasija",
    "high",
    [
        "ABS senzor",
        "Instalacija",
        "Konektor",
        "Ležaj"
    ],
    [
        "Provjeriti senzor",
        "Provjeriti instalaciju",
        "Provjeriti signal"
    ]
);


/* ============================================================
   3. AUTOMATSKO DODAVANJE ČESTIH STANDARDNIH KODOVA
============================================================ */

const additionalGenericDtc = {

    "P0130": [
        "Lambda sonda Bank 1 Sensor 1 – problem kruga",
        "Lambda / Izduv"
    ],

    "P0131": [
        "Lambda sonda Bank 1 Sensor 1 – nizak signal",
        "Lambda"
    ],

    "P0132": [
        "Lambda sonda Bank 1 Sensor 1 – visok signal",
        "Lambda"
    ],

    "P0133": [
        "Lambda sonda Bank 1 Sensor 1 – spor odziv",
        "Lambda"
    ],

    "P0134": [
        "Lambda sonda Bank 1 Sensor 1 – nema aktivnosti",
        "Lambda"
    ],

    "P0135": [
        "Lambda grijač Bank 1 Sensor 1 – problem",
        "Lambda"
    ],

    "P0140": [
        "Lambda Bank 1 Sensor 2 – nema aktivnosti",
        "Lambda"
    ],

    "P0141": [
        "Lambda grijač Bank 1 Sensor 2 – problem",
        "Lambda"
    ],

    "P0150": [
        "Lambda sonda Bank 2 Sensor 1 – problem kruga",
        "Lambda"
    ],

    "P0151": [
        "Lambda sonda Bank 2 Sensor 1 – nizak signal",
        "Lambda"
    ],

    "P0152": [
        "Lambda sonda Bank 2 Sensor 1 – visok signal",
        "Lambda"
    ],

    "P0200": [
        "Injektori – problem električnog kruga",
        "Gorivo"
    ],

    "P0243": [
        "Turbo wastegate solenoid – problem kruga",
        "Turbo"
    ],

    "P0251": [
        "Pumpa goriva – problem upravljanja",
        "Gorivo"
    ],

    "P0380": [
        "Sistem grijača/predgrijavanja – problem kruga",
        "Predgrijavanje"
    ],

    "P0381": [
        "Indikator grijača – problem kruga",
        "Predgrijavanje"
    ],

    "P0505": [
        "Idle Control System – problem",
        "Ler / Gas"
    ],

    "P0506": [
        "Broj obrtaja u leru prenizak",
        "Ler"
    ],

    "P0507": [
        "Broj obrtaja u leru previsok",
        "Ler"
    ],

    "P0606": [
        "ECM/PCM procesor – problem",
        "ECU"
    ],

    "P0622": [
        "Generator – problem upravljanja poljem",
        "Alternator"
    ],

    "P0685": [
        "ECM/PCM relej napajanja – problem kruga",
        "Napajanje ECU-a"
    ],

    "P0705": [
        "Senzor položaja mjenjača – problem",
        "Mjenjač"
    ],

    "P0710": [
        "Senzor temperature ulja mjenjača – problem",
        "Mjenjač"
    ],

    "P0740": [
        "Torque converter clutch – problem",
        "Automatski mjenjač"
    ],

    "P0741": [
        "Torque converter clutch – performance/stuck off",
        "Automatski mjenjač"
    ],

    "P0750": [
        "Shift solenoid A – problem",
        "Automatski mjenjač"
    ],

    "P0755": [
        "Shift solenoid B – problem",
        "Automatski mjenjač"
    ],

    "P0760": [
        "Shift solenoid C – problem",
        "Automatski mjenjač"
    ],

    "P0770": [
        "Shift solenoid E – problem",
        "Automatski mjenjač"
    ],

    "P0840": [
        "Senzor/prekidač pritiska mjenjača – problem",
        "Mjenjač"
    ],

    "P0900": [
        "Aktuator kvačila – otvoren krug",
        "Kvačilo / Mjenjač"
    ],

    "P2000": [
        "NOx trap efikasnost ispod praga",
        "Izduv"
    ],

    "P2008": [
        "Intake manifold runner – otvoren krug",
        "Usis"
    ],

    "P2015": [
        "Intake manifold runner position – range/performance",
        "Usis"
    ],

    "P2033": [
        "Senzor temperature izduvnih gasova – visok signal",
        "Izduv"
    ],

    "P2080": [
        "EGT senzor – range/performance",
        "Izduv"
    ],

    "P2101": [
        "Throttle actuator – range/performance",
        "Leptir gasa"
    ],

    "P2111": [
        "Throttle actuator – zaglavljen otvoren",
        "Leptir gasa"
    ],

    "P2112": [
        "Throttle actuator – zaglavljen zatvoren",
        "Leptir gasa"
    ],

    "P2135": [
        "TPS/APP korelacija – problem",
        "Gas / Leptir"
    ],

    "P2146": [
        "Napajanje grupe injektora – problem",
        "Gorivo"
    ],

    "P2263": [
        "Turbo/Boost sistem – performance",
        "Turbo"
    ],

    "P242F": [
        "DPF – akumulacija pepela/ograničenje",
        "DPF"
    ],

    "P2453": [
        "DPF senzor diferencijalnog pritiska – range/performance",
        "DPF"
    ],

    "P2463": [
        "DPF – akumulacija čađi",
        "DPF"
    ],

    "P2563": [
        "Turbo boost control position sensor – problem",
        "Turbo"
    ]

};


Object.entries(additionalGenericDtc)
.forEach(([code, info]) => {

    if(dtcDatabase[code]) return;

    addDtc(
        code,
        info[0],
        info[1],
        "medium",
        [
            "Senzor ili aktuator",
            "Instalacija",
            "Konektor",
            "Problem upravljanja",
            "Mehanički uzrok"
        ],
        [
            "Očitati freeze-frame podatke",
            "Vizuelno pregledati sistem",
            "Provjeriti konektore i instalaciju",
            "Izmjeriti relevantne vrijednosti",
            "Potvrditi kvar prije zamjene dijelova"
        ]
    );

});


/* ============================================================
   4. GENERIČKI OPISI RASPONA
============================================================ */

const dtcRangeDescriptions = {

    "P0": "Generički OBD-II pogonski kod.",

    "P1": "P1xxx može biti proizvođački specifičan.",

    "P2": "P2xxx pogonski OBD kod.",

    "P3": "P3xxx pogonski kod koji može imati proizvođačko značenje.",

    "B": "B kod – karoserija.",

    "C": "C kod – šasija/ABS/upravljanje.",

    "U": "U kod – komunikacija između modula."

};


/* ============================================================
   5. FUNKCIJA ZA TRAŽENJE KODA
============================================================ */

function getDtc(code, brand = "") {

    if(!code) return null;

    code =
        String(code)
        .trim()
        .toUpperCase();

    const direct =
        dtcDatabase[code];

    if(direct){

        return direct;

    }

    /*
       Ako kod nije u lokalnoj bazi,
       ne izmišljamo značenje.
    */

    return null;

}


/* ============================================================
   6. BROJ KODOVA
============================================================ */

const totalDtcCodes =
    Object.keys(dtcDatabase).length;


/* ============================================================
   7. INFORMACIJA ZA APLIKACIJU
============================================================ */

const databaseInfo = {

    name: "Amel Servis DTC Database",

    version: "2.0",

    vehicleBrands:
        Object.keys(vehicleDatabase).length,

    dtcCodes:
        totalDtcCodes,

    warning:
        "Lokalna baza služi kao pomoć pri dijagnostici. "
        + "Konačnu dijagnozu potvrditi mjerenjem i "
        + "odgovarajućom servisnom dokumentacijom."

};


/* ============================================================
   KRAJ DATABASE.JS
============================================================ */
